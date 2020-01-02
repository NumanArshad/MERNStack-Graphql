import React from 'react';
import { specificbook } from './queries'
import { graphql } from 'react-apollo'
class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    display() {

        var book=this.props.data.book  //  const { book } = this.props.data;  // or var book=this.props.data.book
        //note: data object contain book object in above statement set
        //this.props.data.book actually
        if (book) {  //JSON.stringify(this.props)
            console.log("detail data is "+JSON.stringify(this.props)+"book id:"+this.props.bookId+"book object complete is:"+JSON.stringify(this.props.data.book))
            return (
                <div> jh
              x knjfe   {book.title}
                </div>)
        }
        else {
            return <div>no book selected</div>
        }
    }
    render() {

        return (<div>{this.display()}</div>)

    }
}

export default graphql(specificbook, {
    options: (props) => {
        alert(props.bookId + "in option")
        return {
            variables: {
                Id: props.bookId
            }
        }
    }
})(BookDetail);