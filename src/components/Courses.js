import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import {Button} from 'reactstrap';
import {Card, CardBody, CardItem, CardSubtitle, CardText, CardHeader, CardFooter, Container, CardImg} from 'reactstrap';
import './css/courses.css';

const Course = ({course}) => {
    const buy = () => {
        toast.warn("Are you sure?????",
        {position: 'top-center'}
        );
    };

  const addToCart = () => {
    toast.success("Added to Cart successfully!!!", {position: 'top-right'});
  };
return(
    <Container className='card-1'>
        <ToastContainer />
        <Card style={{marginLeft: 10, marginBottom: 10}}>
            <CardBody>
                {/* <CardImg src='https://picsum.photos/318/180' width='40%'/> */}
                <CardSubtitle><strong>{course.courseName}</strong></CardSubtitle>
                <CardText>
                    <p>
                        {course.description}
                    </p> 
                    ₹{course.price}
                </CardText>
                <Container className='text-center'>
                    <Button color="danger" onClick={buy}>Buy</Button>
                    <Button color="warning" style={{marginLeft: 10}} onClick={addToCart}>Add to Cart</Button>
                </Container>
            </CardBody>
        </Card>
    </Container>
    )
};

export default Course;
