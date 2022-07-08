import './Footer.css'
import footLogo from "/home/marquel/portfolio/fauxspotify/spotify/src/component/Navbar/spotify.jpg"

export default function Footer() {
    
    return (
        <div className='footer'>
            <div className='content'>
            <img alt="Spotify" className='footlogo' src={footLogo}/>
            <ul className="category" id='company'>
                COMPANY
                <li className='list__items'>About</li>
                <li className='list__items'>Jobs</li>
                <li className='list__items'>For the Record</li>
            </ul>
            <ul className="category" id='communities'>
                COMMUNITEIS
                <li className='list__items'>For Artists</li>
                <li className='list__items'>Developers</li>
                <li className='list__items'>Advertising</li>
                <li className='list__items'>Investors</li>
                <li className='list__items'>Vendors</li>
            </ul>
            <ul className="category" id='useful__links'>
                USEFUL LINKS
                <li className='list__items'>Support</li>
                <li className='list__items'>Web Player</li>
                <li className='list__items'>Free Mobile App</li>
                <li className='list__items'>Car Thing</li>
            </ul>
            </div>
        </div>
    )
};

