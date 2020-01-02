import React from 'react';
import {getBooksquery} from './queries'
import {graphql} from 'react-apollo'
import BookDetail from './bookdetail'
class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state={bkid:''};
}
displayBooks(){
    var data=this.props.data;
console.log('display books'+JSON.stringify(this.props));

    if(data.loading){
        return <div>...loading</div>
    }
    else{
        return this.props.data.allBooks.map((book)=>
        <li onClick={()=>this.setState({bkid:book.id})}>{book.title} </li>)
    }
}
    render(){
      
        return (
            
         <div>{this.displayBooks()}
       
         <BookDetail bookId={this.state.bkid}/></div>
            )
        }
    }
export default graphql(getBooksquery)(BookList);