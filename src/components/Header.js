import React, { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import "./Header.css";
import "./Filtre.css"
function Header({handleAdd}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState();
  const [rate, setRate] = useState(0);
  // const[trailer,setTrailer] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title,
      description,
      rate,
      posterUrl: url,
    };
    if (title && description && rate && url) {
      handleAdd(newMovie)
      setTitle("")
      setUrl()
      setDescription("")
      setRate(0)
      handleClose()
    }
    else{
      alert("Please rewrite the necessary information")
    }
  };
  return (
    <div className="Header">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="#gotflix">
            {" "}
            <h1 className="logo">GotFlix</h1>
          </a>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <a href="#Home">
              <li className="menu-list-item active">Home</li>
            </a>
            <a href="#Movies">
              <li className="menu-list-item">Movies</li>
            </a>
            <a href="#Series">
              <li className="menu-list-item">Series</li>
            </a>
            <a href="#Popular">
              <li className="menu-list-item">Popular</li>
            </a>
            <a href="#Trends">
              <li className="menu-list-item">Trends</li>
            </a>
          </ul>
        </div>

        <div className="profile-container">
          <a href="#profile">
            <span className="profile-text">Profile</span>
          </a>
          
          <Dropdown>
  <Dropdown.Toggle variant="Secondary text-light"   id="dropdown-basic">
 
  </Dropdown.Toggle>

  <Dropdown.Menu variant="secondary bg-dark" >
    <Dropdown.Item href="#/action-1"  >
    <Button variant="secondary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={handleSubmit}>
            Title:
            <input
              type="text"
              placeholder="movie title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Descrition:
            <input
              type="text"
              placeholder="movie description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            PosterUrl:
            <input
              type="url"
              placeholder="movie url"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="text"
              placeholder="movie Rate"
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Button variant="secondary" type="submit" calssName="j">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Dropdown.Item>

    
  </Dropdown.Menu>
</Dropdown>
        </div>
      </div>
      </div>
  );
}

export default Header;
