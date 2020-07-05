import React from 'react';
import * as BooksAPI from '../utils/BooksAPI'
import '../App.css';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class SearchBookShelf extends React.Component{

    

    render(){
           return(
            <div >
                  <h2 className="bookshelf-title">{this.props.Books.length != 0 ? this.props.BookShelfName : ''}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"  >
                        {
                            this.props.Books==undefined ? '' :this.props.Books.map((Book) => {return (<BookItem Book ={Book} ChangeBookShelf = {this.props.updateToBookShelf}/>);} )
                        }
                    </ol>
                  </div>
                </div>
        );
    }

}

export default SearchBookShelf;