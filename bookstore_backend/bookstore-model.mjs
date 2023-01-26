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