import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class BookItemMenu extends React.Component{

    
    render(){
        return(
                <select onChange = {(e) => {
                    console.log(e.target.value)
                    this.props.ChangeBookShelf(this.props.Book, e.target.value);
                    }}>
                    <option value="move" disabled selected='selected'>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" >None</option>
                </select>
        );
    }
}

export default BookItemMenu;