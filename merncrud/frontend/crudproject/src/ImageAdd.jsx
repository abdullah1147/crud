import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const ImageAdd = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        try {
            await axios.post(`http://localhost:4000/api/img/add`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setName('');
            setImage(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <Link to='/read'>Read</Link>
            <br /><br />
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
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Now
                </Button>
            </Form>
        </div>
    );
};

export default ImageAdd;
