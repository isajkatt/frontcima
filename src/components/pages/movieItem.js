import React from 'react';

class BookItem extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.id}</h2>
        <h2>{this.props.title}</h2>
        <h2>{this.props.description}</h2>
      </div>
    )
  }
}

export default BookItem;