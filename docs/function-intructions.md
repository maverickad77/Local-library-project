Function instructions
The following functions can be completed in whichever order you choose. There are difficult problems associated with each page, so feel free to skip around as you work your way up to solving more challenging problems!

Account functions
image.png

findAccountById()
The findAccountById() function in public/src/accounts.js has two parameters, in the following order:

An array of accounts.
An ID of a single account.
It returns the account object that has the matching ID.

Example:

findAccountById(accounts, "5f446f2ecfaf0310387c9603");
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/
sortAccountsByLastName()
The sortAccountsByLastName() function in public/src/accounts.js has a single parameter:

An array of accounts.
It returns a sorted array of objects. The objects are sorted alphabetically by last name.

Example:

sortAccountsByLastName(accounts);
/*
  [
    {
      "name": {
        "first": "Kirby",
        "last": "Alston"
      },
      ...
    },
    {
      "name": {
        "first": "Toni",
        "last": "Ball"
      },
      ...
    },
  ]  
*/
numberOfBorrows()
The numberOfBorrows() function in public/src/accounts.js has two parameters, in the following order:

An account object.
An array of all books objects.
It returns a number that represents the number of times the account's ID has appeared in a book's borrow array.

Example:

numberOfBorrows(account, books); // 22
booksInPossession()
The booksInPossession() function in public/src/accounts.js has three parameters, in the following order:

An account object.
An array of all books objects.
An array of all author objects.
It returns an array of books and authors that represents all books currently checked out by the given account. Look carefully at the object below, as it's not just the book object; the author object is embedded inside of it.

Example:

booksInPossession(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
Book functions
image.png

findAuthorById()
The findAuthorById() function in public/src/books.js has two parameters, in the following order:

An array of authors.
An ID of a single author.
It returns the author object that has the matching ID.

Example:

findAuthorById(authors, 11);
/*
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  }
*/
findBookById()
The findBookById() function in public/src/books.js has two parameters, in the following order:

An array of books.
An ID of a single book.
It returns the book object that has the matching ID.

Example:

findBookById(books, "5f447132320b4bc16f950076");
/*
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    ...
  }
*/
partitionBooksByBorrowedStatus()
The partitionBooksByBorrowedStatus() function in public/src/books.js has a single parameter:

An array of books.
It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains books that have been loaned out, and are not yet returned while the second array contains books that have been returned. You can check for the return status by looking at the first transaction in the borrows array.

Example:

partitionBooksByBorrowedStatus(books);
/*
  [
    [
      {
        id: "5f447132d487bd81da01e25e",
        title: "sit eiusmod occaecat eu magna",
        genre: "Science",
        authorId: 8,
        borrows: [
          {
            id: "5f446f2e2cfa3e1d234679b9",
            returned: false,
          },
          ...
        ]
      },
      ...
    ],
    [
      {
        id: "5f44713265e5d8d17789beb0",
        title: "tempor occaecat fugiat",
        genre: "Travel",
        authorId: 16,
        borrows: [
          {
            id: "5f446f2e4eff1030e7316861",
            returned: true,
          },
          ...
        ]
      },
      ...
    ]
  ]
*/
getBorrowersForBook()
The getBorrowersForBook() function in public/src/books.js has two parameters, in the following order:

A book object.
An array of all accounts.
It should return an array of all the transactions from the book's borrows key. However, each transaction should include the related account information and the returned key.

Example:

getBorrowersForBook(book, accounts);
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
Home functions
image.png

totalBooksCount()
The totalBooksCount() function in public/src/home.js has a single parameter:

An array of books.
It returns a number that represents the number of book objects inside of the array.

Example:

totalBooksCount(books); // 100
totalAccountsCount()
The totalAccountsCount() function in public/src/home.js has a single parameter:

An array of accounts.
It returns a number that represents the number of account objects inside of the array.

Example:

totalAccountsCount(accounts); // 75
booksBorrowedCount()
The booksBorrowedCount() function in public/src/home.js has a single parameter:

An array of books.
It returns a number that represents the number of books that have been taken out from the library. This number can be found by looking at the first transaction in the borrows key of each book. If the transaction says the book has not been returned (i.e. returned: false), the book has been borrowed.

Example:

booksBorrowedCount(accounts); // 65
mostCommonGenres()
The mostCommonGenres() function in public/src/home.js has a single parameter:

An array of books.
It returns an array containing five objects or less that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

The name key which represents the name of the genre.
The count key which represents the number of times the genre occurs.
If more than five genres are present, only the top five should be returned.

Example:

mostCommonGenres(books);
/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/
mostPopularBooks()
The mostPopularBooks() function in public/src/home.js has a single parameter:

An array of books.
It returns an array containing five objects or less that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

The name key which represents the title of the book.
The count key which represents the number of times the book has been borrowed.
If more than five books are present, only the top five should be returned.

Example:

mostPopularBooks(books);
/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
mostPopularAuthors()
The mostPopularAuthors() function in public/src/home.js has two parameters, in the following order:

An array of books.
An array of authors.
It returns an array containing five objects or less that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

The name key which represents the first and last name of the author.
The count key which represents the number of times the author's books have been borrowed.
If more than five authors are present, only the top five should be returned.

Example:

mostPopularAuthors(books, authors);
/*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
*/
