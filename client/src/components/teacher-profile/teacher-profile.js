import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Card from '../cards/card';
import RatingBar from '../ratings/rating-bar/rating-bar';
import Accordion from '../accordions/accordion-plus';
import Education from '../teacher-profile/education';
import Dropdown from '../dropdown/dropdown';
import Section from '../section/section';
import Schedule from '../teacher-profile/schedule/schedule';
import List from '../list/list';
import RatingChart from '../ratings/rating-chart/rating-chart';
import Reviews from '../reviews/reviews';
import Rank from '../teacher-profile/rank/rank';
import Sidebar from '../sidebar/sidebar';
import Stats from '../teacher-profile/stats/stats';
import './avatar.scss';
import './teacher-profile.scss';



const TeacherProfile = () => {
    const options = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col sm={9}>
                        <Card
                            hover = {false}
                        >
                            <Row>
                                <Col xs={2}>
                                    <img className="avatar" src="/static/images/dp.jpg" alt=""/>
                                </Col>
                                <Col xs={10}>
                                    <div className="name-location" pulls-left>
                                         <h2>
                                            Kawser Nasim
                                            <span>Dhaka, Bangladesh</span>
                                            <span>
                                                <RatingBar
                                                    value = {4}
                                                    type = "bar"
                                                />
                                            </span>
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className = "tagline-desc">
                                        <h4 className = "tagline">Extraordinary teacher with 9 years experience</h4>
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
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Accordion
                                        title = "Education"
                                    >
                                        <Education/>
                                    </Accordion>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Section
                                        title = "Availability"
                                        icon = "true"
                                        fa = "false"
                                        iconSrc = "clock.svg"
                                    >

                                        <Dropdown
                                            options = {options}
                                        /> 

                                        <Schedule/>

                                    </Section>
                                        
                                </Col>

                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Section
                                        title = "Subjects"
                                        icon = "false"
                                    >
                                        <Row>
                                            <Col sm={3}>
                                                <List 
                                                    items = {[
                                                        'SAT',
                                                        'ACT',
                                                        'GRE',
                                                        'IELTs',
                                                    ]}
                                                    title = "Test Prep"
                                                />
                                            </Col>
                                            <Col sm={3}>
                                                <List 
                                                    items = {[
                                                        'SAT',
                                                        'ACT',
                                                        'GRE',
                                                        'IELTs',
                                                    ]}
                                                    title = "Test Prep"
                                                />
                                            </Col>
                                            <Col sm={3}>
                                                <List 
                                                    items = {[
                                                        'SAT',
                                                        'ACT',
                                                        'GRE',
                                                        'IELTs',
                                                    ]}
                                                    title = "Test Prep"
                                                />
                                            </Col>                                 
                                        </Row>
                                    </Section>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Section
                                        title = "Ratings and Reviews"
                                        icon = "false"
                                    >
                                        <div className="ratings-reviews">
                                            <div className="ratings">
                                                <RatingBar
                                                    value = {4}
                                                />
                                            </div>
                                            <h5 className="num-ratings">65 Ratings</h5>
                                        </div>

                                        <RatingChart/>

                                        <Reviews />                   

                                    </Section>

                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col xs={3}>
                        <Sidebar>

                        <Row>
                            <Col sm = {12}>
                                <Rank/>
                            </Col>
                        </Row>    

                        <Row>
                            <Col sm = {12}>
                                <Stats 
                                    title = "Sessions completed"
                                    stat = "56"

                                />
                            </Col>
                        </Row>   

                        <Row>
                            <Col sm = {12}>
                                <Stats 
                                    title = "Hours Taught"
                                    stat = "56"
                                />
                            </Col>
                        </Row> 

                        <Row>
                            <Col sm = {12}>
                                <Stats 
                                    title = "Hours Taught"
                                    stat = "56"
                                    sub = {true}

                                />
                            </Col>
                        </Row>                               
                              
                            
                           

                        </Sidebar>
                    </Col>
                </Row>
            </Grid>

        </div>
    )
}

export default TeacherProfile;