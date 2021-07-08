import React, { useState } from "react";
import { Filter } from "./Filter";
import AddMovie from "./AddMovie";
import { Navbar, Form, Nav, Image, Button, FormControl } from "react-bootstrap";

const NavBar = ({ handleAdd, handleinput, searchinit, handlerate }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Image
          src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
          style={{ height: 30 }}
        />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          {" "}
          <Button variant="outline-info" onClick={() => setModalShow(true)}>
            Add Movie
          </Button>
          <AddMovie
            handleAdd={handleAdd}
            setModalShow={setModalShow}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Filter handlerate={handlerate} />
        </Nav>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <Button
            variant="outline-info"
            onClick={() => {
              handleinput(text);
            }}
          >
            Search
          </Button>
          <Button
            variant="outline-info"
            onClick={() => {
              searchinit();
            }}
          >
            Reset
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
