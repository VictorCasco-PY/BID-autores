const { Author } = require("../models/authors.model");

//Create
module.exports.createAuthor = async (request, response) => {
  try {
    const { name } = request.body;
    const authorCreate = await Author.create({
      name,
    });
    response.json(authorCreate);
  } catch (error) {
    response.status(400).json(error);
  }
};

//Read
module.exports.findAllAuthors = async (request, response) => {
  try {
    const authorsList = await Author.find({});
    response.json(authorsList);
  } catch (error) {
    response.status(400).json(error);
  }
};

//Read One
module.exports.findOneAuthor = async (request, response) => {
  try {
    const authorOne = await Author.findOne({ _id: request.params.id });
    response.json(authorOne);
  } catch (error) {
    response.status(400).json(error);
  }
};

//Update
module.exports.updateAuthor = async (request, response) => {
  try {
    const updatedAuthor = await Author.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(updatedAuthor);
  } catch (error) {
    response.status(400).json(error);
  }
};

//Delete
module.exports.deleteAuthor = async (request, response) => {
  try {
    const deletedAuthor = await Author.deleteOne({
      _id: request.params.id,
    });
    response.json(deletedAuthor);
  } catch (error) {
    response.status(400).json(error);
  }
};
