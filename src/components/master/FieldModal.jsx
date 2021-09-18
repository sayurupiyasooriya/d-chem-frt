import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export const FieldModal = (props) => {
    return (
        <div>
            <Modal show={props.stat} onHide={props.methods}>
                <Modal.Header closeButton>
                    <Modal.Title>Create A New Field</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Field Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a field name" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Insert A Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit" onClickCapture>
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={props.methods}>
                                Close
                            </Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default FieldModal