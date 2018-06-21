import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Gallery from 'react-grid-gallery';
import { imagesOther, imagesArbor } from './images';
import YouTube from 'react-youtube';

export class PortfolioPage extends React.Component {
    render() {
        return (
            <section className="portfolioPage mx-3">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>Web</h2>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12">
                        <Link to="/">
                            <h4>hadron.design</h4>
                        </Link>
                        <hr />
                    </div>
                    <div className="col-sm-7">
                        <div className="screenshot d-flex justify-content-center align-items-start">
                            <video
                                src={window.location.origin + '/static/mp4/desktop_demo.mp4'}
                                type="video/mp4"
                                autoPlay
                                loop
                            />
                        </div>
                    </div>
                    <div className="col-sm-5 my-2">
                        <p>description</p>
                        <ul className="dashed">
                            <li>technology used</li>
                        </ul>
                        <h6>Complete source code available on GitHub:</h6>
                        <a href="https://github.com/Tenemo/hadrondesign">
                            <h6>
                                <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo/hadrondesign
                    </h6>
                        </a>
                        <a href="https://github.com/Tenemo/hadrondesign-server">
                            <h6>
                                <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo/hadrondesign-server
                        </h6>
                        </a>
                        <a href="https://github.com/Tenemo/FlipEm-legacy">
                            <h6>
                                <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo/FlipEm-legacy
                        </h6>
                        </a>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 text-sm-right">
                        <a href="http://wiernypies.pl">
                            <h4>wiernypies.pl</h4>
                        </a>
                        <hr />
                    </div>
                    <div className="screenshot col-sm-7 order-sm-last">
                        <a href="http://wiernypies.pl">
                            <img
                                src={window.location.origin + '/static/images/websites/wiernypies.jpg'}
                            />
                        </a>
                    </div>
                    <div className="col-sm-5 my-2">
                        <p>description</p>
                        <ul className="dashed">
                            <li>technology used</li>
                        </ul>
                        Complete source code available on GitHub:
                    <a href="https://github.com/Tenemo/Faithful">
                            <h6>
                                <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo/Faithful
                        </h6>
                        </a>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12">
                        <a href="http://arbor.lublin.pl">
                            <h4>arbor.lublin.pl</h4>
                        </a>
                        <hr />
                    </div>
                    <div className="screenshot col-sm-7">
                        <a href="http://arbor.lublin.pl">
                            <img
                                src={window.location.origin + '/static/images/websites/arborlublin.jpg'}
                            />
                        </a>
                    </div>
                    <div className="col-sm-5 my-2">
                        <p>description</p>
                        <ul className="dashed">
                            <li>technology used</li>
                        </ul>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 text-sm-right">
                        <a href="http://satores.pl">
                            <h4>satores.pl</h4>
                        </a>
                        <hr />
                    </div>
                    <div className="screenshot col-sm-7 order-sm-last">
                        <a href="http://satores.pl">
                            <img
                                src={window.location.origin + '/static/images/websites/satores.jpg'}
                            />
                        </a>
                    </div>
                    <div className="col-sm-5 my-2">
                        <ul className="dashed">
                            <li>Wordpress</li>
                            <li>Custom CSS for menus and backgrounds</li>
                        </ul>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12">
                        <a href="http://kg-dob.pl">
                            <h4>kg-dob.pl</h4>
                        </a>
                        <hr />
                    </div>
                    <div className="screenshot col-sm-7">
                        <a href="http://kg-dob.pl">
                            <img
                                src={window.location.origin + '/static/images/websites/kgdob.jpg'}
                            />
                        </a>
                    </div>
                    <div className="col-sm-5 my-2">
                        <ul className="dashed">
                            <li>Wordpress</li>
                            <li>Custom theme, based on previous non-wordpress website</li>
                        </ul>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 text-center">
                        <h2>Graphics, Typography & Other</h2>
                        <h6>Unless noted otherwise, all parts of the artwork are by me.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Arbor & Tartak Krychów</h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Gallery
                            id="galleryArbor"
                            images={imagesArbor}
                            enableImageSelection={false}
                            backdropClosesModal
                            imageCountSeparator={' of '} // for i18n later
                            showLightboxThumbnails
                        />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-sm-12">
                        <h6>Time-lapse footage of train loading/reloading in Dorohusk, Ukraine. Composed out of over 40,000 individual photos. Shot from a nearby forest, from a <a href="/static/images/dorohusk_wieza.jpg">20 m high tower,</a> way above the trees, which I climbed. Photos were taken using a GoPro with a 30Ah powerbank stuck to the railing with tape. On both occasions I had to later retrieve the equipment in the middle of the night. </h6>
                    </div>
                    <div className="col-sm-6">
                        <div className="videoWrapper">
                            <YouTube
                                videoId="TEOYq_ZFBmI"
                                opts={{
                                    height: '390',
                                    width: '640'
                                }}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="videoWrapper">
                            <YouTube
                                videoId="X26Ot_JVmYk"
                                opts={{
                                    height: '390',
                                    width: '640'
                                }}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h4>Other</h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Gallery
                            id="galleryOther"
                            images={imagesOther}
                            enableImageSelection={false}
                            backdropClosesModal
                            imageCountSeparator={' of '} // for i18n later
                            showLightboxThumbnails
                        />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-sm-12">
                        <h6>Technical translation, captioned first hour, the theoretical part, from spoken Russian to Polish. [CC] for captions.</h6>
                    </div>
                    <div className="col" id="Georgios">
                        <div className="videoWrapper">
                            <YouTube
                                videoId="rIKVJ1zDmTE"
                                opts={{
                                    height: '390',
                                    width: '640'
                                }}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioPage;