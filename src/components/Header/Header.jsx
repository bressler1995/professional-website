import './Header.css';

function Header() {
    return (
        <div id="eccent-header" className="absolute top-0 left-0 w-[70px] md:w-[300px] h-full z-3">
            <ul>
                <li key="nav-one">Home</li>
                <li key="nav-two">About</li>
                <li key="nav-three">Contact</li>
            </ul>
        </div>
    );
}

export default Header;