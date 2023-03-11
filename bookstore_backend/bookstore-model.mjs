// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect using the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and displaying a message to the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Exercises collection using Mongoose.');
    }
});

// Defining the Schema
const bookSchema = mongoose.Schema({
	name: { type: String, required: true },
	author: { type: String, required: true },
	price: { type: Number, required: true },
    stock: { type: Number, required: true},
    description: {type: String, required: true}
});

// Compile the model from the schema.
const Book = mongoose.model("Book", bookSchema);

// CREATE model to add a book into catalog collection
const createBook = async (name, author, price, stock, description) => {
    const book = new Book({ 
        name: name,
        author: author,
        price: price,
        stock: stock,
        description: description
    });
    return book.save();
}

// RETRIEVE models to use for book search functionality and View Catalog page
// Retrieve all books in collection and return a promise
const findBooks = async () => {
    const query = Book.find();
    return query.exec();
}

// Retrieve book based on the ID and return a promise.
const findBookById = async (_id) => {
    const query = Book.findById(_id);
    return query.exec();
}

// const findBookByName = async (filter) => {
//     const query = Book.find(filter)
//     return query.exec()
// }

// REPLACE model for updating books in databse
const replaceBook = async (_id, name, author, price, stock, description) => {
    const result = await Book.replaceOne({_id: _id }, {
        name: name,
        author: author,
        price: price,
        stock: stock,
        description: description
    });
    return result.modifiedCount;
}

// DELETE model based on ID  
const deleteById = async (_id) => {
    const result = await Book.deleteOne({_id: _id});
    return result.deletedCount;
};

// Export our variables for use in the controller file.
export { createBook, findBooks, findBookById, replaceBook, deleteById }