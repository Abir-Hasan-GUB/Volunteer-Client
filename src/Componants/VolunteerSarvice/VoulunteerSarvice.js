import React from 'react';
import { Card } from 'react-bootstrap';
import './VolunteerSarvice.css';
import pic from '../Images/mixedImage/babySit.png';

const VoulunteerSarvice = () => {
    return (
        <div className="sarvices container row">
            <div className="sarvice-card col-md-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Footer>
                    <strong className="text-muted">Sarvice Name Here</strong>
                </Card.Footer>
            </Card>
            </div>

            <div className="sarvice-card col-md-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Footer>
                    <strong className="text-muted">Sarvice Name Here</strong>
                </Card.Footer>
            </Card>
            </div>

            <div className="sarvice-card col-md-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Footer>
                    <strong className="text-muted">Sarvice Name Here</strong>
                </Card.Footer>
            </Card>
            </div>

            <div className="sarvice-card col-md-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Footer>
                    <strong className="text-muted">Sarvice Name Here</strong>
                </Card.Footer>
            </Card>
            </div>

            <div className="sarvice-card col-md-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Footer>
                    <strong className="text-muted">Sarvice Name Here</strong>
                </Card.Footer>
            </Card>
            </div>

        </div>
    );
};

export default VoulunteerSarvice;