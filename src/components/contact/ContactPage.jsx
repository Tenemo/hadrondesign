import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ContactPage = () => {
    return (
        <section className="contactPage">
            <div className="row">
                <div className="col-sm-12 my-3">
                    <h5>
                        <a href="https://www.linkedin.com/in/ppiech/">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> /ppiech
                        </a>
                    </h5>
                    <h5>
                        <a href="https://github.com/Tenemo">
                            <FontAwesomeIcon icon={['fab', 'github']} /> /Tenemo
                        </a>
                    </h5>
                    <h5>
                        <a href="mailto:piotr@hadron.design">
                            <FontAwesomeIcon icon={['far', 'envelope']} /> piotr@hadron.design
                        </a>
                    </h5>
                </div>
                <div className="col-sm-12 my-3">
                    <h5>
                        <FontAwesomeIcon icon={['far', 'building']} /> Company Info
                    </h5>
                    <p>
                        <span className="font-weight-bold">
                            Hadron&nbsp;Design Piotr&nbsp;Piech <br /><br />
                        </span>
                        ul.&nbsp;Gwarków&nbsp;4/21, 21-010&nbsp;Łęczna, Poland <br /><br />
                        NIP&nbsp;[EU&nbsp;VAT&nbsp;ID]: PL5050125887 <br /><br />
                        <a href="mailto:piotr@hadron.design">
                            <FontAwesomeIcon icon={['far', 'envelope']} /> kontakt@hadron.design <br /><br />
                        </a>
                    </p>
                    <h5>
                        <FontAwesomeIcon icon={['fas', 'university']} /> Bank Transfer Details
                    </h5>
                    <p>
                        IBAN: PL75 1140&nbsp;2004 0000&nbsp;3202 7619&nbsp;2059 <br /><br />
                        BIC/SWIFT: BREXPLPWMBK <br /><br />
                        SORT CODE: 11402004  <br /><br />
                        Bank name: mBank&nbsp;S.A. FORMERLY BRE&nbsp;BANK S.A. (RETAIL BANKING) LODZ  <br /><br />
                        Bank address: Skrytka pocztowa&nbsp;2108, 90-959 Łódź&nbsp;2 <br /><br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
