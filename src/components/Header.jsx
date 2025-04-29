
function Header({ onThemeChange }) {

  return (
    <div className="header">
        <div className="title">
            <p>Where in the world?</p>
        </div>
        <div className="switch">
            {/* <img src="" alt="" /> */}
            <p onClick={onThemeChange} className="btn-toggle">Dark Mode</p>
        </div>
    </div>
  );
}

export default Header;