// Array to store book information
let books = [
    [1, "BookT1", "Author1", 10, 50],
    [2, "BookT2", "Author2", 15, 30],
    [3, "BookT3", "Author3", 20, 20],
];

// Add a new book
function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
}

// Display all information
function displayBooks() {
    console.log(" ID\tTitle\t\tAuthor\t\tPrice\tQuantity");
    for (let i = 0; i < books.length; i++) {
        console.log(
            books[i][0] + "\t" + books[i][1] + "\t" + books[i][2] + "\t" + books[i][3] + "\t" + books[i][4]
        );
    }
}

// Search for a book using Book ID, Title, or Author
function searchBook(query) {
    for (let i = 0; i < books.length; i++) {
        if (
            books[i][0] === query ||
            books[i][1].toLowerCase().includes(query.toLowerCase()) ||
            books[i][2].toLowerCase().includes(query.toLowerCase())
        ) {
            return books[i];
        }
    }
    return null;
}

// Sell a book and generate an invoice
function sellBook(title, quantity, balance) {
    let book = searchBook(title);

    if (book && book[3] >= quantity) {
        let totalCost = book[3] * quantity;

        if (totalCost <= balance) {
            // Update the stock quantity
            book[4] -= quantity;

            // Calculate the new balance
            balance -= totalCost;

            console.log("Sold", quantity, "Copy of", title, "Success");
            console.log("New balance:", balance);
        } else {
            console.log("Insufficient balance to purchase the specified books.");
        }
    } else {
        console.log("The book is unavailable or the quantity is insufficient.");
    }
}


// Example of how to use the functions
addBook(4, "BookT4 ", "Author4", 25, 15);
displayBooks();

let result = searchBook("Author2");
console.log("Search result:", result);

sellBook("Book Title 1", 5, 200);
displayBooks();
