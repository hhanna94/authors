const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}