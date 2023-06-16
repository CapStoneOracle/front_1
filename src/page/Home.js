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
        content: `<div style="background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);">${location.state.name}</div>`,
      });

      window.naver.maps.Event.addListener(restaurantLocationMarker, 'click', () => {
        infoWindow.open(map, restaurantLocationMarker);
      });
    }
    // Marker click event listener and additional logic
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(37.626251);
          setLongitude(127.072495);
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
      <SearchBar/>
      <div className='map-place'>
      {address && <p>Address: {address}</p>}
      <div style={{ width: '100%', height: '500px' }}>
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
      </div>
      <Recommend restaurants={restaurants} />
    </div>
  )
}

export default Home;
