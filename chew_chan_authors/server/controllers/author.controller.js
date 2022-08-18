const Author = require('../models/author.model');

module.exports ={
    //function to create a new author 
    createNewAuthor:(req,res) =>{
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor);
            })
            .catch((err)=>res.status(400).json({message:'something went wrong with createNewAuthor',error:err}));
    },

    //function to get all authors
    getAllAuthors:(req,res) =>{
        Author.find({})
        .then((allAuthors)=>{
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllAuthors',error:err}));
    },

    //function to get a single author
    getAuthorById: (req,res) =>{
        Author.findOne({_id:req.params.id})
        .then((oneAuthor)=>{
            console.log(oneAuthor);
            res.json(oneAuthor);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllAuthors',error:err}));
    },

    // function to update existing author
    updateAuthorById:(req,res) =>{
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true,runValidators:true})
        .then((updatedAuthor)=>{
            console.log(updatedAuthor);
            res.json(updatedAuthor);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with updateAuthorById',error:err}));
    },

    // function to delete a existing author
    deleteAuthorById:(req,res) =>{
        Author.deleteOne({_id:req.params.id})
        .then((deletedAuthor)=>{
            console.log(deletedAuthor);
            res.json(deletedAuthor);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with deleteAuthorById',error:err}));
    },    

};

