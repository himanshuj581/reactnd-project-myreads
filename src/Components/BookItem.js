import React from 'react';
import '../App.css';
import BookItemMenu from './BookItemMenu';
import PropTypes from 'prop-types';



class BookItem extends React.Component{
  render(){    
      return (<li key = {this.props.Book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: typeof(this.props.Book.imageLinks) !== 'undefined' ?`url(${this.props.Book.imageLinks.thumbnail})`:''}}></div>
            <div className="book-shelf-changer">
              <BookItemMenu ChangeBookShelf = {this.props.ChangeBookShelf} Book = {this.props.Book}/>
            </div>
          </div>
          <div className="book-title">{this.props.Book.title}</div>
          <div className="book-authors">{this.props.Book.authors}</div>
        </div>
      </li>);
  }
}

export default BookItem;