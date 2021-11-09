import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
const CourseModal = (props) => {
    return (
        <div>
            <Modal show={props.showModal} onHide={props.handleClick}>
                <Modal.Header >
                    <Modal.Title>{`Add New ${props.modalName}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group controlId="image" className="mb-3">
                            <Form.Label>Insert {props.modalName}</Form.Label>
                            <Form.Control type="file" onChange={e => props.handleChange({ val: e.target.value, id: e.target.id, file: e.target.files[0] })} />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit" onClick={props.handleSubmit}>
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CourseModal
