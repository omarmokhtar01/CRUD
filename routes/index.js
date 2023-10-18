const express= require("express");
const router=express.Router();

const {createBook,getAllBooks,getSingleBook,deleteBook,updateBook}=require("../controller/crud")
router.post("/", createBook);
router.get("/", getAllBooks);
router.get('/:id', getSingleBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)


module.exports = router;
