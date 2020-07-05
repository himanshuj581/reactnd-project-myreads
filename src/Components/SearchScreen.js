import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import {Link} from 'react-router-dom'
import '../App.css'
import SearchBookShelf from './SearchBookShelf'

class SearchScreen extends React.Component{

    state ={
      query: '',
      Book: [],
    }

    updateQuery = (query) =>{
      console.log(query);
         if(query.length != 0){
           BooksAPI.search(query).then((Books) =>
             this.setState({
               Book: Books,
               query: query,
             })
           )           
         }
         else{
        this.setState({
            Book: [],
            query: query,
          })
        }
      }


    render(){
     
 
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
              <input type="text" 
                     placeholder="Search by title or author" 
                     value={this.state.query}
                     onChange={(event) => {this.updateQuery(event.target.value);}}/>
              {
                Array.isArray(this.state.Book) ? <SearchBookShelf Books ={this.state.Book} updateToBookShelf = {this.props.updateToBookShelf} BookShelfName = 'Search Items'/> : <h2 className="bookshelf-title">Sorry! No result Found</h2> 
              }

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
    }
}

export default SearchScreen;