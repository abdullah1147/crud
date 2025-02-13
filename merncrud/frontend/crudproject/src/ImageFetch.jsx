import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ImageFetch = () => {
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const imageData = async () => {
      const response = await axios.get(`http://localhost:4000/api/img/read`);
      setImage(response.data.image)
    }
    imageData();
  }, [])

  const deletenow = async(imgId)=>
  {
    setImage((remove)=>remove.filter((image=>image._id!==imgId)))
  }
  const editnow = (image)=>
  {
    navigate(`/edit/${image._id}`,{state:{image}})
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            image.map((img, idx) => (
              <tr key={img._id}>
                <td>{idx + 1}</td>
                <td>{img.name}</td>
                <td><img src={img.image} width={'50px'} height={'50px'} alt="" /></td>
                <td><Button variant="outline-danger" onClick={()=>deletenow(img._id)}>Delete</Button></td>
                <td><Button variant="outline-warning" onClick={()=>editnow(img)}>Edit</Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ImageFetch
