const mongoose = require ("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter an author's name."],
            minlength:[3,"It must be at least 3 characters"]
        }
},{timestamps: true});

module.exports = mongoose.model("Author",AuthorSchema);

