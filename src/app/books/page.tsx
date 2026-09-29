import React from 'react';
import { productDataType } from '../type';
import BookCard from '../components/BookCard';

const getBooks =  async() =>{
    const res = await fetch("http://localhost:5000/products?category=Books", {
        cache: 'force-cache'
    });
    if(!res.ok){
        throw new Error ("Failed to fetch Book data.")
    }
    return res.json();
}

const BooksPage = async() => {

    const books: productDataType[] = await getBooks();

    return (
        <div className='grid grid-cols-3 gap-5 mt-10 container mx-auto'>
            {
                books.map((book: productDataType) => <BookCard key={book.id} book={book}/>)
            }
        </div>
    );
};

export default BooksPage;