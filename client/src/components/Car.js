import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CarContext from '../context/car/CarContext';
import ModalContext from '../context/modal/ModalContext';
import DeleteCarModal from "./DeleteCarModal";
import EditCarModal from './modals/EditCarModal';

const Car = (props) => {
    // Init context=========================
    // car
    const carContext = useContext(CarContext);
    const { resStatus, deleteCar } = carContext;
    // modal
    const modalContext = useContext(ModalContext);
    const { openDeleteModal, openEditModal } = modalContext;
    // =====================================
    const del = (e) => { openDeleteModal(e.target.id) };
    const edit = (e) => { openEditModal(e.target.id) }
    // const handleDelete = (e) => {
    //     console.log("target from Car.js", e.target.id)
    //     deleteCar(e.target.id)
    //     handleClose()
    // };
    // props from CarsResult.js
    const { car, index } = props;

    if (resStatus === 200) {
        return (
            <Accordion key={index} >
                {/* Confirmation MODALS======================== */}
                <DeleteCarModal />
                <EditCarModal />
                {/* ============================================= */}
                <Accordion.Header>
                    <Container>
                        <Row>
                            <Col sm={6} md={12} lg={6}>
                                <h5>
                                    <Badge bg={car.fault === "alternator" ? "success" : "danger"}>
                                        {car.fault === "alternator" ? "ALT" : "STR"}
                                    </Badge>{` ${car.make} ${car.model} `}
                                </h5>
                            </Col>
                            <Col sm={3} md={6} lg={3} className='mb-1' >
                                <Button
                                    id={car._id}
                                    onClick={del}
                                    variant="secondary"
                                    size='sm'>Delete
                                </Button>
                            </Col>
                            <Col sm={3} md={6} lg={3} >
                                <Button
                                    id={car._id}
                                    onClick={edit}
                                    size='sm'
                                    variant="dark"
                                >Edit</Button>
                            </Col>
                        </Row>
                    </Container>

                </Accordion.Header >
                <Card >
                    <Accordion.Body >
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>engine cc: <strong>{car.engineVolume}</strong></ListGroup.Item>
                            <ListGroup.Item>year: <strong>{car.year}</strong></ListGroup.Item>
                            <ListGroup.Item>fuel: <strong>{car.fuel}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>fault: <strong>{car.fault}</strong>
                            </ListGroup.Item>
                            <Card.Text>notes: <strong>{car.notes}</strong></Card.Text>
                        </ListGroup>
                        <Card.Footer>
                            <small className="text-muted">added by: <strong>{car.addedBy}</strong></small>
                        </Card.Footer>
                    </Accordion.Body>
                </Card>
            </Accordion>
        )
    } else {
        return (
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>404</Card.Title>
                    <Card.Text>
                        No cars found
                    </Card.Text>
                </Card.Body>

            </Card>
        )
    }


};
export default Car;
