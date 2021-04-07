import React, {Component} from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTelegramPlane,
    faTwitter,
    faViber,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faMapMarkerAlt, faAt} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {

    render() {
        return (
            <footer style={{background: `url('./images/banner/bg-footer.jpg')`}}>
                <div className='container'>
                    <div className='footer__row'>
                        <div className='footer__content'>
                            <section className='footer__section1'>
                                <h3>ԿԱՊ</h3>
                                <div className='row'>
                                    <span>
                                    <FontAwesomeIcon icon={faPhone}/>&ensp;
                                        Հեռ։&ensp;
                                        <a href="tel:+37494313338">+374 94 313338</a>
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>&ensp;Հասցե։&ensp;
                                        <a href="https://yandex.ru/maps/10259/gyumri/house/YEoYfgNnSkIGQFpqfXRxcnxmYw==/?ll=43.860050%2C40.791490&z=14"
                                           target="_blank" rel="noreferrer">Գարեգին Նժդեհ 4</a>
                                    </span>
                                    <span>
                                    <FontAwesomeIcon icon={faAt}/>&ensp;
                                        Էլ. փոստ։&ensp;
                                        <a href="mailto:karsmanex@gmail.com" target="_blank" rel="noreferrer">
                                            karsmanex@gmail.com
                                        </a>
                                    </span>
                                </div>
                                <img className='footer__logo' src='/images/logos/5.png' alt='logo'/>
                            </section>
                            <section className='YMaps footer__section2'>
                                <YMaps>
                                    <Map state={{center: [40.803057, 43.847371], zoom: 14}}
                                         width={'100%'}
                                         height={200}
                                    >
                                        <Placemark geometry={[40.803057, 43.847371]}/>
                                    </Map>
                                </YMaps>
                            </section>
                            <section className="footer__section3">
                                <h3>ՍՈՑ․ <span style={{color: "brown"}}>ԿԱՅՔԵՐ</span></h3>
                                <div className='row'>
                                    <a target="_blank" href="https://www.facebook.com/karsandmanex/"
                                       className="social__item"
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF} style={{color: '#2d88ff'}}/>
                                    </a>
                                    <a target="_blank" href="https://twitter.com" className="social__item"
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faTelegramPlane} style={{color: '#34abe3'}}/>
                                    </a>
                                    <a target="_blank" href="https://plus.google.com/" className="social__item"
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} style={{color: '#1da1f2'}}/>
                                    </a>
                                </div>
                                <div className='row row2'>
                                    <a target="_blank" href="https://plus.google.com/" className="social__item"
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} style={{color: '#00e676'}}/>
                                    </a>
                                    <a target="_blank" href="https://plus.google.com/" className="social__item"
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faViber} style={{color: '#583ebc'}}/>
                                    </a>
                                </div>
                                <a target="_blank"
                                   href="https://www.instagram.com/karsmanex/?igshid=hpwcft4djsoe&fbclid=IwAR1i8CVKvl2sc64JuXdP8cEMMIyCngpGmlzwIMO9leFSzrfFM7wvNEiOVPk"
                                   className="social__item"
                                   rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} style={{color: '#ee4c4c'}}/>
                                </a>
                            </section>
                        </div>
                        <div className='footer__copyright'>
                            &copy; {new Date().getFullYear()} Kars&Manex.<p>&ensp;Բոլոր իրավունքները պաշտպանված են</p>.
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;