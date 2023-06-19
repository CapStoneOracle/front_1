import '../loginModal.css'

const LoginModal = (props) => {
  const { open, onConfirm, children } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header className='ft20b'>{children}</header>
            <main> <div className='yes-button' onClick={onConfirm}>확인</div></main>
        </section>
      ) : null}
    </div>
  );
};

export default LoginModal;