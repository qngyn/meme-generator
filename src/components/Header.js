import './Header.css'
import logo from '../assets/troll-face.png'
function Header() {
    return (
        <nav className = "nav"> 
            <div className = "nav-page"> 
                <img src = {logo} className = "logo" />
                <h1 className = "nav-header"> Meme Generator </h1>
            </div>
        </nav>
    );
}

export default Header;
