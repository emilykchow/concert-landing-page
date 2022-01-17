import React from 'react';
import "./Pricing.css";
import { Card, Button } from 'react-bootstrap';

function Pricing() {
    return (
        <div className="Pricing-wrapper" id="pricing">

            <div className="pricing-title">
                <h2>Choose Your Plan</h2>
            </div>
            
            <div className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Basic Plan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$9/month</Card.Subtitle>
                    <Card.Text>
                    ✓Great sound quality
                    <br />
                    ✓Good music library 
                    <br />
                    ✓Excellent song choices
                    <br />
                    ✓Basic amount of visuals
                    </Card.Text>
                    <div className="pricing-btn-container">
                        <Button variant="primary">Buy Plan</Button>{' '}
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Advanced Plan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$99/year</Card.Subtitle>
                    <Card.Text>
                    ✓Amazing sound quality
                    <br />
                    ✓Great music library
                    <br />
                    ✓Even better song choices
                    <br />
                    ✓Amazing visuals
                    </Card.Text>
                    <div className="pricing-btn-container">
                        <Button variant="primary">Buy Plan</Button>{' '}
                    </div>   
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Pro Plan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$150/year</Card.Subtitle>
                    <Card.Text>
                    ✓Incredible sound quality
                    <br/>
                    ✓Unbelievable music library
                    <br/>
                    ✓Crazy good song choices
                    <br />
                    ✓Amazing visuals
                    </Card.Text>
                    <div className="pricing-btn-container">
                        <Button variant="primary">Buy Plan</Button>{' '}
                    </div>   
                </Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Pricing;
