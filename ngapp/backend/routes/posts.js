const express = require("express");


const PostController = require('../controllers/posts');


const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();



router.post(
  "",
  checkAuth,
  extractFile,
  PostController.CreatePosts
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.UpdatePosts
);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
