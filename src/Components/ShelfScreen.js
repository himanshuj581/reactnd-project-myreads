import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI'
import '../App.css'
import Shelf from './Shelf';

class ShelfScreen extends React.Component{

  state = {
    Books: [],
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((Books)=>{
        this.setState(() => ({
            Books
        }))
    })
  }

    BooksSorter = (shelf) => { 
        return this.state.Books.filter((Book)=>{
            return Book.shelf == shelf;
        })
      }

    ChangeBookShelf = (Book, shelf) => {    
      BooksAPI.update(Book, shelf);
      BooksAPI.getAll()
      .then((Books)=>{
        this.setState({Books});
      })
    }  
 
    render(){
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf BookShelfName = 'Currently Reading' Books = {this.BooksSorter('currentlyReading')} ChangeBookShelf = {this.ChangeBookShelf}/>
                <Shelf BookShelfName = 'Read' Books = {this.BooksSorter('read')} ChangeBookShelf = {this.ChangeBookShelf}/>
                <Shelf BookShelfName = 'Want to Read' Books = {this.BooksSorter('wantToRead')} ChangeBookShelf = {this.ChangeBookShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search" to='/Search'>Add a book</Link>
            </div>
          </div>
        );
    }
}

export default ShelfScreen;