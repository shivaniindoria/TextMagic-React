import React, { useState } from 'react'

export default function About() {

    const [aboutStyle, setaboutStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setbtnText] = useState("Enable dark Mode")
    const toggleStyle = () => {
        if (aboutStyle.color === 'black') {
            setaboutStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Enable light Mode");
        }
        else {
            setaboutStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Enable dark Mode");

        }
    }
    return (
        <>
            <div className="container" style={aboutStyle}>
                <div>
                    <h1 className='my-2'>About Us</h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={aboutStyle}>
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={aboutStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={aboutStyle}>
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={aboutStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={aboutStyle}>
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={aboutStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="form-check form-switch container">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
                </div>
            </div>
        </>
    )
}
