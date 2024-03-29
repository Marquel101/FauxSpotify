import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    
    return (
        <div className='footer'>
            <div className='container'>
                <div className='top__content'>
                    <img alt="Spotify" className='footlogo' src="https://i.imgur.com/8o2sR7p.jpg"/>
                    <div className='categories'>
                        <ul className="category">
                            <div id='company'>COMPANY</div>
                            <li className='list__items'>About</li>
                            <li className='list__items'>Jobs</li>
                            <li className='list__items'>For the Record</li>
                        </ul>
                        <ul className="category">
                            <div  id='communities'>COMMUNITIES</div>
                            <li className='list__items'>For Artists</li>
                            <li className='list__items'>Developers</li>
                            <li className='list__items'>Advertising</li>
                            <li className='list__items'>Investors</li>
                            <li className='list__items'>Vendors</li>
                        </ul>
                        <ul className="category">
                            <div  id='useful__links'>USEFUL LINKS</div>
                            <li className='list__items'>Support</li>
                            <li className='list__items'>Web Player</li>
                            <li className='list__items'>Free Mobile App</li>
                            <li className='list__items'>Car Thing</li>
                        </ul>
                    </div>    
                    <div className='icons'>
                        <FontAwesomeIcon icon={faInstagram} id='ig' />
                        <FontAwesomeIcon icon={faTwitter} id="twt"/>
                        <FontAwesomeIcon icon={faFacebookF} id="fb"/>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='country'>
                        USA
                    </div>
                    <div className='other__things'>
                        <ul className='partone'>
                            <li className='secondary'>Legal</li>
                            <li className='secondary'>Privacy Center</li>
                            <li className='secondary'>Privacy Policy</li>
                            <li className='secondary'>Cookies</li>
                            <li className='secondary'>About Ads </li>
                            <li className='secondary'> Additional CA Privacy Dislosures </li>
                        </ul>
                        <span className="trade">2022 Spotify AB</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

