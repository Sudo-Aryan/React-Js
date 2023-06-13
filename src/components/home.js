import React from 'react';
import { Button, Container } from 'reactstrap';

const home = () => {
    return(
        <div className='jumbotron text-center' style={{background: '#AAA', borderRadius: 7}}>
            <h1>CS Tutorials</h1>
            <p>This React Website is created by Aryan Halwai for educational purpose.</p>
            <Container className='align-center'>
                <Button color='primary'>Start Using</Button>
            </Container>
        </div>
    )
};

export default home;