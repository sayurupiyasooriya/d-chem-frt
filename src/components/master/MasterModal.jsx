import React, { useState } from 'react'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'


const MasterModal = (props) => {
    const [fieldId, setfieldId] = useState('')
    const handleSelect = (e) => {
        // props.setFieldId('61469cbbcaaa56d13f96de1d')
        // console.log(e)
    }
    return (
        <div>
            <Modal show={props.showModal} onHide={props.handleClick}>
                <Modal.Header >
                    <Modal.Title>{`Create A New ${props.modalName}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>{`${props.modalName}`}</Form.Label>
                            <Form.Control type="text" placeholder={`Enter a ${props.modalName} name`} onChange={e => props.handleChange({ val: e.target.value, id: e.target.id })} name="name" />
                        </Form.Group>
                        {props.modalName !== 'Course' &&
                            <Form.Group controlId="image" className="mb-3">
                                <Form.Label>Insert A Image</Form.Label>
                                <Form.Control type="file" onChange={e => props.handleChange({ val: e.target.value, id: e.target.id, file: e.target.files[0] })} />
                            </Form.Group>
                        }
                        {
                            props.modalName == 'Course' &&
                            <Dropdown onSelect={props.handleSelect}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Field
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        props.fieldData.map((field, i) => {
                                            return (<Dropdown.Item eventKey={field._id} >{field.name}</Dropdown.Item>)
                                        })}

                                </Dropdown.Menu>
                            </Dropdown>
                        }
                        <Form.Group>
                            <Button variant="primary" type="submit" onClick={props.create}>
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
export default MasterModal