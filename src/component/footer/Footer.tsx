import React from 'react';
import venia_logo from '../../assests/images/venia-logo.jpg';

function Footer() {
    return (
        <div>
            <div >
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <h6>Account</h6>
                        <ul>
                            <li>
                                <a href="#">Sign In</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                            <li>
                                <a href="#">Order Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <h6>About Us </h6>
                        <ul>
                            <li>
                                <a href="#">Our Story</a>
                            </li>
                            <li>
                                <a href="#">Carrers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <h6>Help </h6>
                        <ul>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Order Status</a>
                            </li>
                            <li>
                                <a href="#">Return</a>
                            </li>
                        </ul>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <h6>Follow Us!</h6>
                        <ul>
                            <li>
                                <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <img src={venia_logo}></img>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6">
                        <span>© Company Name Address Ave, City Name, State ZIP</span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <span>
                            Terms of Use
                        </span>
                        <span>
                            Privacy Policy
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;