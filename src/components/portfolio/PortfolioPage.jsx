import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import { imagesOther, imagesArbor } from './images';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioPage = () => {
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
                    <p>
                        The site you are currently on, it&#39;s main part being, unsurprisingly, the <Link to="/game">Flip&#39;Em</Link> game.
                        </p>
                    <ul className="dashed">
                        <li>React.js + Redux + redux-thunk</li>
                        <li>AWS + docker</li>
                        <li>Webpack 4</li>
                        <li>Sass</li>
                        <li>Bootstrap 4</li>
                        <li>Toastr</li>
                        <li>Dark theme! I love dark themes (and f.lux)</li>
                    </ul>
                    <p>
                        If you consider yourself great at puzzle games, give <Link to="/game">Flip&#39;Em</Link> a try on larger board sizes! ...If you don&#39;t, give it a shot anyway:
                        </p>
                    <ul className="dashed">
                        <li>Fully responsive, written with mobile devices in mind</li>
                        <li>Very difficult, has more depth to it than may seem at first</li>
                        <li>Global real-time high score list</li>
                        <li>Back-end API for time and puzzle solution verification, server runs its own simulation based on moves sent, scores can&#39;t be faked (hopefully!)</li>
                        <li>Randomly generated boards, each generated in a way guaranteeing it to be solvable, although it&#39;s sometimes hard to believe</li>
                        <li>Option to provide your own seed for board generation</li>
                    </ul>
                    <p>
                        It&#39;s a complete react.js rewrite of my previous <a href="https://github.com/Tenemo/FlipEm-legacy">hacked-together-in-a-weekend client-only puzzle game</a>.
                        </p>
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
                    <ul className="dashed">
                        <li>Gulp.js</li>
                        <li>Bower</li>
                        <li>Pug/Jade</li>
                        <li>Less</li>
                        <li>Bootstrap 3</li>
                        <li>jQuery</li>
                        <li>i18next, EN/PL, automatic detection and preference saving</li>
                        <li>Translated by me</li>
                    </ul>
                    <h6>Complete source code available on GitHub:</h6>
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
                    <ul className="dashed">
                        <li>Gulp.js</li>
                        <li>Bower</li>
                        <li>Pug/Jade</li>
                        <li>Less</li>
                        <li>Bootstrap 3</li>
                        <li>jQuery</li>
                        <li>i18next, EN/PL, automatic detection and preference saving</li>
                        <li>Translated by me</li>
                        <li>All photos by me</li>
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
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;