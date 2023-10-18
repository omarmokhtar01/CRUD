const bookModel = require("../models/bookModel")

// @desc Create new book
// @route Post /api/v1/books
exports.createBook = async (req, res, next) => {
    let book;

    const { title,
        author,
        description,
        genre,
        publisher,
        publishedDate,
        pagesCount,
        price } = req.body

    try {
        book = await bookModel.create({
            title,
            author,
            description,
            genre,
            publisher,
            publishedDate,
            pagesCount,
            price
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Failed to create Book" })
    }
    return res.status(201).json({ message: "book created", data: book });
}

// @desc Get all books
// @route GET /api/v1/books
exports.getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await bookModel.find()
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error')
    }
    return res.status(200).json({ success: true, count: books.length, data: books })
};

// @desc Get single book by id
// @route GET /api/v1/books/:id
exports.getSingleBook = async (req, res, next) => {
    let book;
    try {
        book = await bookModel.findById(req.params.id)
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error')
    }
    return res.status(200).json({ success: true, data: book })
};

// @desc Update a book
// @route PUT /api/v1/books/:id
exports.updateBook = async (req, res, next) => {
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error')
    }
    return res.status(200).json({ success: true, data: book })
};

// @desc Delete a book
// @route DELETE /api/v1/books/:id
exports.deleteBook = async (req, res, next) => {
    let book;
    try {
        book = await bookModel.findByIdAndDelete(req.params.id)
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error')
    }
    return res.status(204).json({ success: true, message: 'Deleted' })
}
