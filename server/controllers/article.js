const { Article, joiSchema } = require("../model/article");

// get all the articles
const getAllArticles = async (req, res) => {
  const article = await Article.find();
  res.status(200).send(article);
};

// add new article
const addNewArticle = async (req, res) => {
  const body = req.body;
  const { title, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let article = new Article({
    title,
    content,
    imgUrl,
  });
  try {
    article = await article.save();
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change article
const changeArticle = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");

    
  const { title, content, imgUrl } = body;
  try {
    const article = await Article.updateOne(
      { _id: id },
      { $set: { title, content, imgUrl } }
    );
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete article by id
const deleteArticle = async (req, res) => {
  const id = req.params.id;
  await Article.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllArticles,
  addNewArticle,
  changeArticle,
  deleteArticle,
};
