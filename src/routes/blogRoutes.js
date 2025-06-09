const express = require("express");
const { createBlog,updateBlog,deleteBlog,getBlogById,getBlogBySlug } = require("../controllers/blogController");
const { publisherProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const uploadBlogImage = require("../middleware/uploadBlogImage");
const router = express.Router();

router.post("/", publisherProtect,apiKeyProtect, uploadBlogImage.single("image"), createBlog);
router.put("/:blogId", publisherProtect,apiKeyProtect,updateBlog); 
router.delete("/:blogId", publisherProtect,apiKeyProtect, deleteBlog);
router.get("/:id",publisherProtect,apiKeyProtect, getBlogById);
router.get("/slug/:slug",apiKeyProtect, getBlogBySlug);

module.exports = router;
