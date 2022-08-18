import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Main = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then((res)=>{
            console.log(res.data);
            setList(res.data);
        })
        .catch((err)=>{console.log(err)});
    },[]);

    const deleteHandler = (authorId) =>{
        axios.delete (`http://localhost:8000/api/authors/${authorId}`)
        .then((res)=>{
            const newAuthorList = list.filter((author)=>{
            return author._id !== authorId;
            });
            setList(newAuthorList);
        })
        .catch((err)=>{console.log(err)});
    };    

    return (
        <div className='container col col-8 mx-auto'>
            <Link to={`/new`}>Add an author</Link>
            <h2>We have quotes by:</h2>
            <table  className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope ='col'>Actions available</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        list.map((author,index)=>{
                            return(
                                <tr key={index}>
                                    <th>{author.name}</th>
                                    <th className='d-flex justify-content-around '>
                                        <Link to={`/edit/${author._id}`}><button className='btn btn-primary'>Edit</button></Link>
                                        <button
                                        onClick={()=>deleteHandler(author._id)}
                                        className="btn btn-danger">
                                            Delete Author
                                        </button>
                                    </th>
                                </tr>
                            );
                        })
                    }    
                    </tbody>
                            
            </table>
        </div>
    )
}

export default Main