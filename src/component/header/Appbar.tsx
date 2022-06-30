import venia_logo from '../../assests/images/venia-logo.jpg';
import search from '../../assests/images/search.svg';
import user from '../../assests/images/user.svg';
import archive from '../../assests/images/archive.svg';
import { ROUTES } from '../../constant/routes';
import { Link } from 'react-router-dom';

function Appbar() {
    return (
        <div className='header-container'>
            <section className="header">
                <header>
                    <nav className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--2 logo">
                        <Link to={ROUTES.PRODUCT_LIST}>{<img className='venia-logo' src={venia_logo}></img>}</Link>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide main_menus">
                            <ul className='menu-class'>
                                <li className='list-class-women'>Women</li>
                                <li className='list-class'>Men</li>
                                <li className='list-class'>Smart Gear</li>
                                <li className='list-class'>Accessories</li>
                            </ul>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--3 right_nav">
                            <ul className='menu-class'>
                                <img src={search}></img>
                                <li className='list-class'>Search</li>

                                <img src={user}></img>
                                <li className='list-class'> Sign in</li>


                                <img src={archive}></img>
                            </ul>
                        </div>

                    </nav>
                </header>
            </section>

        </div>
    );
}

export default Appbar;