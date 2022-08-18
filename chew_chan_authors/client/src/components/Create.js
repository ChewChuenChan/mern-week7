import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState("");
    const [errors, setErrors]= useState({})

    const navigate =useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create',{
            name
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error.errors)
        });
    }


    return (
        <div>
            <h2>Add a new author</h2>
            <form  className='container col col-4 mx-auto border' onSubmit={submitHandler}>
            <div className='mb-3'>
                <label className='form-label'>Name:</label>
                <input
                className='form-control'
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                {errors.name?
                <p className='text-danger'>{errors.name.message}</p>:null
                }
            </div>
            <div className='mb-3 d-flex justify-content-around'>
                <Link to={"/"}><button className='btn btn-info'>Cancel</button></Link>
                <button className="btn btn-success">Create</button>
            </div>
                
            </form>
        </div>
    )
}

export default Create