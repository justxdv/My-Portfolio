import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__active">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Newton School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> July 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">BCA</h3>
                            <span className="qualification__subtitle">Poornima University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Aug 2018 - Dec 2021
                            </div>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Secondary (Class 12)</h3>
                            <span className="qualification__subtitle">National Institute of Open School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Mar 2016 - Mar 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Secondary (Class 10)</h3>
                            <span className="qualification__subtitle">Carmel Convent Sr. Sec. School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Mar 2014 - Mar 2015
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Qualification