import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovie = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="movie">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Movie Title " name="title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Rate this Movie"
              min="1"
              max="5"
              name="rate"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Poster Link</Form.Label>
            <Form.Control type="url" placeholder="Poster Link" name="poster" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trailler Link</Form.Label>
            <Form.Control type="url" placeholder="Trailler Link" name="video" />
          </Form.Group>
          <br />
          <Button
            //type="submit"
            onClick={() => {
              props.handleAdd(document.getElementById("movie"));
              props.setModalShow(false);
            }}
          >
            Save Changes
          </Button>

          <Button type="reset">Reset</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovie;
