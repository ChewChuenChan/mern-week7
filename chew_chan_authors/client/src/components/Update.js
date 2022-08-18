import { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.name);
        })
        .catch((err)=>{
            console.log(err.res);
            setNotFound("Author is not found with the given ID ");
        });
    },[]);

    const [name,setName]=useState("");
    const [notFound, setNotFound]= useState("");
    const [errors, setErrors] = useState({});

    const editHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`,{name})
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);
        });
    };

    return (
        <div className='container col col-8 mx-auto'>
            <h2>Edit this author </h2>
            <form  className='container col col-4 mx-auto border' onSubmit={editHandler}>
                {notFound ?
                <p className='text-danger'>
                    {notFound}
                <Link to="/new"> Click here to add author</Link>
                </p>:null
                }
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
                    <button className="btn btn-success">Edit</button>
                </div>
                    
                </form>
        </div>
    )
}

export default Update