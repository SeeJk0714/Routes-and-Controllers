const express = require("express");
const app = express();

let books = [
    {
        id: 1,
        title: "Book One",
        description: "Description of book one",
        authorId: 1,
    },
    {
        id: 2,
        title: "Book Two",
        description: "Description of book two",
        authorId: 2,
    },
];

let reviews = [
    { id: 1, text: "Amazing book!", bookId: 1 },
    { id: 2, text: "Decent read.", bookId: 2 },
];

let authors = [
    { id: 1, name: "Author One", bio: "Bio of Author One" },
    { id: 2, name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here
app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const book = books.find((b) => parseInt(b.id) === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(400).json({ error: "ID provided is not available" });
    }
});

app.get("/reviews", (req, res) => {
    res.json(reviews);
});

app.get("/reviews/:id", (req, res) => {
    const review = reviews.find(
        (r) => parseInt(r.id) === parseInt(req.params.id)
    );
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(400).json({ error: "ID provided is not available" });
    }
});

app.get("/authors", (req, res) => {
    res.json(authors);
});

// get a specific author
app.get("/authors/:id", (req, res) => {
    // authors/1
    const author = authors.find(
        (a) => parseInt(a.id) === parseInt(req.params.id)
    );
    // make sure author is available
    if (author) {
        res.status(200).json(author);
    } else {
        // error handling
        res.status(400).json({ error: "ID provided is not available" });
    }
});

app.get("/", (req, res) => {
    res.send(
        '<a href="/books">Books</a><br/><a href="/reviews">Reviews</a><br/><a href="/authors">Authors</a>'
    );
});

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
