const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    genre: [{ type: String }],
    publisher: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now() },
    pagesCount: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true  //creates createdAt and updatedAt fields automatically
})
module.exports = mongoose.model('Book', bookSchema)