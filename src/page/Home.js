import SearchBar from '../component/SearchBar'
import Recommend from '../component/Recommend'
import React, { useEffect, useState } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import currentMarker from '../images/current.png';
import restaurantMarker from '../images/restaurant.png'
const Home = () => {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  

  const CLIENT_ID = 'rwaxemln73';
  let map = null;
  const navigate = useNavigate();
  const location = useLocation();

  const reverseGeocode = (latitude, longitude) => {
    axios
      .get(`http://localhost:8080/point?latitude=${latitude}&longitude=${longitude}`)
      .then((response) => {
        const data = response.data; // Array of restaurant information
        setRestaurants(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(latitude, longitude),
      zoom: 16,
    };
    console.log(location.state?.memId)

    map = new window.naver.maps.Map('map', mapOptions);

    // Current location marker
    const currentLocationMarker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(latitude, longitude),
      icon: {
        url: currentMarker,
      },
      map: map,
    });

    if (location.state != null) {
      const restaurantLocationMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(location.state.latitude, location.state.longitude),
        map: map,
        icon: {
          url: restaurantMarker,
        },
        animation: window.naver.maps.Animation.DROP,
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div class='info-window ft16b'>
            ${location.state.name}<br>
            <button class='info-db-button ft10r' onclick="handleButtonClick(event)">정보 확인</button>
          </div>
        `,
        borderWidth: 0,
        backgroundColor: 0,
        anchorSize: { width: 0, height: 10 },
      });
      
      function handleButtonClick(event) {
        event.preventDefault();
        // Redirect to /store/:id
        navigate(`/store/${location.state.id}`);
      }
      
      window.handleButtonClick = handleButtonClick;

      window.naver.maps.Event.addListener(restaurantLocationMarker, 'click', () => {
        infoWindow.open(map, restaurantLocationMarker);
      });

      window.naver.maps.Event.addListener(restaurantLocationMarker, 'dblclick', () => {
        infoWindow.close(map, restaurantLocationMarker);
      });
    }
    // Marker click event listener and additional logic
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(37.654692);
          setLongitude(127.060587);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      reverseGeocode(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude && longitude && restaurants.length > 0) {
      if (window.naver && window.naver.maps) {
        initializeMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`;
        script.async = true;
        script.addEventListener('load', () => {
          initializeMap();
        });
        document.head.appendChild(script);
      }
    }
  }, [latitude, longitude, restaurants]);

  useEffect(() => {
    return () => {
      const script = document.querySelector('script[src^="https://openapi.map.naver.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <div>
      <SearchBar memId = {location.state?.memId}/>
      <div>
      {address && <p>Address: {address}</p>}
      <div className='map-place'>
        <div id="map" style={{ height: '100vh' }}></div>
      </div>
      </div>
      <Recommend restaurants={restaurants} memId = {location.state?.memId} />
    </div>
  )
}

export default Home;