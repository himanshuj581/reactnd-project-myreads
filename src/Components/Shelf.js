import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class Shelf extends React.Component{

    state = {
        Books: [],
    }
    

    render(){
        this.state.Books = this.props.Books;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.BookShelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.state.Books.map((Book) => {return (<BookItem Book ={Book} ChangeBookShelf = {this.props.ChangeBookShelf}/>);} )
                        }
                    </ol>
                  </div>
                </div>
        );
    }

}

export default Shelf;