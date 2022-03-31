import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"



const AddMovie = ({ handleAdd }) => {
       
    const [newMovie, setNewMovie] = useState({
        id:7,
        title: "",
        rate: "",
        season:"",
        type:"",
        ep:"",
        release:"",
        imgback:"",
        desc: "",
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }




    const st={width: "100%",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "5px 10px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"}

    
    return (
        
        <div className="adding-movie">
            <Button style={st} variant="primary" onClick={handleShow}>
                Add Movie
            </Button>
            <Modal className='formm' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div >
                    <form className='fo'>
                        TITLE:
                        <input type="text" className="form-control" placeholder="enter title here" onChange={handleChange} name="title" value={newMovie.title} />
                        DESCRIPTION:
                        <input type="text" className="form-control" placeholder="enter description here" onChange={handleChange} name="desc" value={newMovie.desc} />
                        TYPE:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={handleChange} name="type" value={newMovie.type} />
                        SEASON:
                        <input type="text" className="form-control" placeholder="enter season number" onChange={handleChange} name="season" value={newMovie.season} />
                        EPISODE:
                        <input type="text" className="form-control" placeholder="enter episode number here" onChange={handleChange} name="ep" value={newMovie.ep} />
                        RELEASE:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={handleChange} name="release" value={newMovie.release} />
                        POSTERURL:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={handleChange} name="imgback" value={newMovie.imgback} />
                        TRAILERRURL:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={handleChange} name="trailer" value={newMovie.trailer} />
                        RATE:
                        <input type="text" className="form-control" placeholder="enter rate here" onChange={handleChange} name="rate" value={newMovie.rate} />
                        <Modal.Footer>
                    <Button style={st} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={st}variant="primary" onClick={()=>{handleAdd(newMovie);handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </form>
                    </div>

                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default AddMovie
