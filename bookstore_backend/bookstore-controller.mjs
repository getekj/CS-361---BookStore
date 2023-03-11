//imports
import 'dotenv/config';
import express from 'express';
import * as books from './bookstore-model.mjs';

import cors from 'cors';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// to remove CORS errors
app.use(cors());

// Create using POST
app.post ('/books', (req,res) => { 
    books.createBook(
        req.body.name, 
        req.body.author,
        req.body.price,
        req.body.stock,
        req.body.description
        )
        .then(book => {
            res.status(201).json(book);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Invalid Request' });
        });
});

//Read using GET 
app.get('/books', (req, res) => {
    
    books.findBooks()
        .then(books => { 
           res.status(200).json(books);     
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed' });
        });
});

// GET books by ID
app.get('/books/:_id', (req, res) => {
    const bookId = req.params._id;
    books.findBookById(bookId)
        .then(book => { 
            if (book !== null) {
                res.json(book);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed' });
        });

});

// get books by name
// app.get('/books/:_name', asyncHandler(async(req, res) => {
//     const filter = {name: req.query.name};
//     // if (req.query.name !== undefined) {
//     //     filter.name = req.query.name;
//     // }
//     const result = await books.findBookByName(filter);
//     res.send(result);
// }));

// PUT to update a book
app.put('/books/:_id', (req, res) => {
    books.replaceBook(
        req.params._id, 
        req.body.name, 
        req.body.author,
        req.body.price,
        req.body.stock,
        req.body.description
    )

    .then(numUpdated => {
        if (numUpdated === 1) {
            res.status(200).json({ 
                _id: req.params._id, 
                name: req.body.name, 
                author: req.body.author,
                price: req.body.price,
                stock: req.body.stock,
                description: req.body.description
            })
        } else {
            res.status(404).json({ Error: 'Not Found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Invalid Request' });
    });
});

// Delete using DELETE id
app.delete('/books/:_id', (req, res) => {
    books.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});