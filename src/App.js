import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import SearchScreen from './Components/SearchScreen'
import ShelfScreen from './Components/ShelfScreen';


class BooksApp extends React.Component {
  
  updateToBookShelf = (Book,shelf) => {
    BooksAPI.update(Book,shelf)
    .then((Books) => (console.log(Books)));
  }
  render() {
    return (
      <div className="app">
        <Route exact path ='/' render = {() => (
            <ShelfScreen/>
        )}
          />
        <Route path='/search' render={({ history }) => (
          <SearchScreen
            updateToBookShelf={(Book,shelf) => {
              this.updateToBookShelf(Book,shelf)
              history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
