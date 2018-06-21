import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const PortfolioPage = () => {
    return (
        <section className="portfolioPage mx-3">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4>Web</h4>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-12">
                    <Link to="/">
                        <h5>hadron.design</h5>
                    </Link>
                </div>
                <div className="col-sm-7">
                    <div className="d-flex justify-content-center align-items-start">
                        <video
                            src={window.location.origin + '/static/mp4/desktop_demo.mp4'}
                            type="video/mp4"
                            autoPlay
                            loop
                        />
                    </div>
                </div>
                <div className="col-sm-5 my-2">
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
                <div className="col-sm-12 text-right">
                    <a href="http://wiernypies.pl">
                        <h5>wiernypies.pl</h5>
                    </a>
                </div>
                <div className="col-sm-5 my-2">
                    <a href="https://github.com/Tenemo/Faithful">
                        <h6>
                            <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo/Faithful
                        </h6>
                    </a>
                </div>
                <div className="col-sm-7">
                    <a href="http://wiernypies.pl">
                        <img
                            src={window.location.origin + '/static/images/websites/wiernypies.jpg'}
                        />
                    </a>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-12">
                    <a href="http://arbor.lublin.pl">
                        <h5>arbor.lublin.pl</h5>
                    </a>
                </div>
                <div className="col-sm-7">
                    <a href="http://arbor.lublin.pl">
                        <img
                            src={window.location.origin + '/static/images/websites/arborlublin.jpg'}
                        />
                    </a>
                </div>
                <div className="col-sm-5 my-2">
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-12 text-right">
                    <a href="http://satores.pl">
                        <h5>satores.pl</h5>
                    </a>
                </div>
                <div className="col-sm-5 my-2">
                </div>
                <div className="col-sm-7">
                    <a href="http://satores.pl">
                        <img
                            src={window.location.origin + '/static/images/websites/satores.jpg'}
                        />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4>Other</h4>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;
