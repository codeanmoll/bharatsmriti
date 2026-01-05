import React from 'react'
import "./styles/Card1.css"
const Card1 = () => {
    return (
        <div className="container1">
            <section className="cards-section">
                <h4 className="subtitle">OUR MISSION INFOGRAPHIC</h4>
                <p className="description">Lorem ipsum dolor sit amet</p>

                <div className="cards-container">
                    {/* Mission Card */}
                    <div className="card yellow">
                        <div className="card-top">
                            <div className="icon">🎯</div>
                            <h3>MISSION</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                sed do eiusmod tempor incididunt ut labore et.
                            </p>
                        </div>
                        <div className="card-bottom">
                            <span>01</span>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="card blue">
                        <div className="card-top">
                            <div className="icon">💡</div>
                            <h3>VISION</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                sed do eiusmod tempor incididunt ut labore et.
                            </p>
                        </div>
                        <div className="card-bottom">
                            <span>02</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card1
