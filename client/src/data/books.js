let books = [
    {
        name: "Santa Monica",
        id: 1995,
        price: "$10,800",
        pubdate: "1995-12-05"
    },
    {
        name: "Stankonia",
        id: 2000,
        price: "$8,000",
        pubdate: "2000-10-31"
    },
    {
        name: "Ocean Avenue",
        id: 2003,
        price: "$9,500",
        pubdate: "2007-04-01"
    },
    {
        name: "Tubthumper",
        id: 1997,
        price: "$14,000",
        pubdate: "1997-08-01"
    },
    {
        name: "Wide Open Spaces",
        id: 1998,
        price: "$4,600",
        // pubdate: "01/27/2998"
        pubdate: "2008-01-27"
    }
];

export function getBooks ()
{
    return books;
}

export function getBook (id) {
    return books.find(book => book.id === id);
}

export function updateBook (id, _book) {
    books = books.map( book => {
        return (book.id === id) ? _book : book;
    });
}

export function saveBook (book) {
    books.push(book);     
}