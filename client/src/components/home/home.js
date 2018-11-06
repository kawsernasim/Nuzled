import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Button from '../buttons/button';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="intro">
                    <Grid>
                        <Row>
                            <Col xs={6}>
                                <div className="intro-message">
                                    <h1>Get Connected
                                    <span>Get Englightened</span></h1>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="section-2">
                    <Grid>
                        <Row>
                            <Col sm = {9}>
                                <div className = "content-2">
                                    <h2>Hire a tutor. Learn online.</h2>
                                    <span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                        Nunc sit amet nulla semper, ultricies sapien sed, bibendum turpis. tur. 
                                        Pellentesque at nunc nunc. Nunc sit amet nulla semper, ultricies sapien sed, bibendum turpis. tur. 
                                        Pellentesque at nunc nunc.
                                        </p>
                                    </span>
                                </div>

                            </Col>
                                
                            <Col sm = {3}>
                                <img className="computer-icon" src="/static/images/home/computer.svg" alt="computer"/>
                            </Col>

                        </Row>
                    </Grid>
                </div>


                <div className = "section-3">
                    <Grid>
                        <Row>
                            <div className = "section-title">
                                <h2>How it works</h2>
                            </div>
                        </Row>

                        <Row>
                            <div className="hiw-icons">

                                <div className="hiw-column">
                                    <Col sm={3}>
                                        <img src="/static/images/home/find.svg" alt="find" />
                                        <h2 className="column-title">Find</h2>
                                        <span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                                            </p>
                                        </span>
                                    </Col>
                                </div>

                                <div className="hiw-column">
                                    <Col sm={3}>
                                        <img src="/static/images/home/book.svg" alt="book" />
                                        <h2 className="column-title">Book your session</h2>
                                        <span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                                            </p>
                                        </span>
                                    </Col>
                                </div>

                                <div className="hiw-column">
                                    <Col sm={3}>
                                        <img src="/static/images/home/learn.svg" alt="learn" />
                                        <h2 className="column-title">Learn</h2> 
                                        <span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                                            </p>
                                        </span>
                                    </Col>
                                </div>

                                <div className="hiw-column">
                                    <Col sm={3}>
                                        <img src="/static/images/home/pay.svg" alt="pay" />
                                        <h2 className="column-title">Pay</h2> 
                                        <span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                                            </p>
                                        </span>
                                    </Col>
                                </div>
                            </div>

                        </Row>
                    </Grid>
                </div>
            
                <div className = "section-4">
                    <Grid>
                        <Row>
                            <div className = "section-title">
                                <h2>Knowledge has no borders
                                <span><br />Hire anyone from anywhere</span>
                                </h2>

                                <div className="content-4">
                                    <img className="globe" src="/static/images/home/globe.svg" alt="globe"/>
                                </div>
                                
                            </div>
                        </Row>


                    </Grid>
                </div>

                <div className = "section-5">
                    <Grid>
                        <Row>
                            <div className = "section-title">
                                <h2>Start teaching with Nuzled
                                <span><br />We're dedicated to provide tutors with a platform to make a difference</span>
                                </h2>

                                <div className="content-5">
                                    
                                    <Button
                                        text = "Join us today"
                                        link = "http://google.com"
                                    />

                                </div>
                                
                            </div>
                        </Row>


                    </Grid>
                </div>

            
            </div>
        )
    }
}

export default Home;