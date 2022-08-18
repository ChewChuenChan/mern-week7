const AuthorController = require ('../controllers/author.controller');

module.exports =(app) =>{
    app.post("/api/authors/create",AuthorController.createNewAuthor);
    app.get("/api/authors",AuthorController.getAllAuthors);
    app.get("/api/authors/:id",AuthorController.getAuthorById);
    app.put("/api/authors/:id",AuthorController.updateAuthorById);
    app.delete("/api/authors/:id",AuthorController.deleteAuthorById);
}