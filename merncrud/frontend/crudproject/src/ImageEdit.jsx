import React, { useState }  from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const ImageEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const{image} = location.state;
    const [name, setName] = useState(image.name);
    const [selectimage, setSelectimage] = useState(image.image);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', selectimage);

        try {
            await axios.put(`http://localhost:4000/api/img/edit/${image._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate('/read')
        } catch (error) {
            console.log(error.message);
        }
    };
  return (
    <div>
      <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="file"  
                        name="image"  
                        onChange={(e) => setSelectimage(e.target.files[0])} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit Now
                </Button>
            </Form>
    </div>
  )
}

export default ImageEdit
