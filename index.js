// Array to store book information
let books = [
    [1, "Life", "Ahmed", 45, 50],
    [2, "Happiness", "Rayan", 40, 30],
    [3, "The sun", "Rawan", 30, 20],
];

// Add a new book
function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
}

// Display all information with proper formatting
function displayBooks() {
    console.log(" ID\tTitle\t\tAuthor\t\tPrice\tQuantity");
    for (let i = 0; i < books.length; i++) {
        const [id, title, author, price, quantity] = books[i];
        console.log(`${id}\t${title.padEnd(18)}${author.padEnd(18)}${price}\t${quantity}`);
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

    if (book && book[4] >= quantity) {
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

// Example 
addBook(4, "in the cloud", "Reem", 25, 15, 2); 
displayBooks();

// Sorting based on author
let result = searchBook("Rayan");
console.log("Search result:", result);

sellBook("Life", 1, 45);
displayBooks();
