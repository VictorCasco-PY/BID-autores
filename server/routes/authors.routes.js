const AuthorsController = require("../controllers/authors.controller");

module.exports = function (app) {
  app.post("/api/authors", AuthorsController.createAuthor);
  app.get("/api/authors", AuthorsController.findAllAuthors);
  app.get("/api/authors/:id", AuthorsController.findOneAuthor);
  app.put("/api/authors/:id", AuthorsController.updateAuthor);
  app.delete("/api/authors/:id", AuthorsController.deleteAuthor);
};
