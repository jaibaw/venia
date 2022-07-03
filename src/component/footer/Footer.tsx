import venia_logo from '../../assests/images/venia-logo.jpg';
import facebook from '../../assests/images/facebook.svg';
import twitter from '../../assests/images/twitter.svg';
import instagram from '../../assests/images/instagram.svg';
import { ROUTES } from '../../constant/routes';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-main-container'>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>Account</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li >Women</li>
                                <li >Men</li>
                                <li >Smart Gear</li>
                                <li >Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>About Us </span>
                            <ul className='footer-sub-heading-sapn'>
                                <li>
                                    Our Story
                                </li>
                                <li>
                                    Carrers
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>Help</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Order Status
                                </li>
                                <li>
                                    Return
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div>
                            <span className='footer-heading-span '>Follow Us!</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </li>
                                <a href='https://www.instagram.com/'>
                                    <img className='footer-social-media-logo' src={instagram}></img>
                                </a>
                                <a href='https://www.facebook.com/'>
                                    <img className='footer-social-media-logo' src={facebook}></img>
                                </a>
                                <a href='https://twitter.com/'>
                                    <img className='footer-social-media-logo' src={twitter}></img>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy-right-container'>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                        <Link to={ROUTES.PRODUCT_LIST}>{<img className='footer-venia-logo' src={venia_logo}></img>}</Link>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <span className='footer-copy-right-span'>© Company Name Address Ave, City Name, State ZIP</span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-term-policy-container'>
                            <span className='footer-term-policy-span'>
                                Terms of Use
                            </span>
                            <span className='footer-term-policy-span'>
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;