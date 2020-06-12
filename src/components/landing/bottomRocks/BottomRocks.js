import React from "react";

import "./bottomRocks.scss";

import redRocks from "../../../utilities/assets/Red-Rocks.png";
import umbrella from "../../../utilities/assets/002-insurance.png";
import tools from "../../../utilities/assets/001-settings.png";
import taxes from "../../../utilities/assets/003-taxes.png";

function BottomRocks(props) {
    return (
        <section>
            <div className="bottom-rocks-body">
                <img className="red-rocks-pic" src={redRocks} />
                <div className="lighten-red-rocks"></div>
                <div className='bottom-rocks-container'>
                    <div className='umbrella-container'>
                        <img className='umbrella-pic' src={umbrella} />
                        <h1 className='umbrella-text'>
                            Leasing agreements, systems to file claims, and insurance policies protect our owners against most property damages
                        </h1>
                    </div>
                    <div className='tools-container'>
                        <img className='tools-pic' src={tools} />
                        <h2 className='tools-text'>
                            Our on-the-ground correspondence specialists oversee no more than 15 homes each, ensuring unparalleled familiarity, ownership and care for each property.
                        </h2>
                    </div>
                    <div className='taxes-container'>
                        <img className='taxes-pic' src={taxes} />
                        <h3 className='taxes-text'>
                            All property owners have access to our proprietary accounting software, which tracks your rental cash flows. Arrived calculates and pays taxes on behalf of our owner on any cash flows stemming from Arrived-partnered rental properties.
                        </h3>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default BottomRocks;
