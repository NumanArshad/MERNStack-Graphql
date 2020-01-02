import React from 'react';
import {getAuhors,assignAuthor,getBooksquery} from './queries'
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright'

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bookname: '', genre: '', authorId: '' };
    }
    displayAuthors(){
        var data=this.props.getAuhors; //this.props.data to this.props.getAuhors
        console.log(this.props)
        if(data.loading){
            return <div>loading author</div>
        }
         else{
            return data.allauthor.map((author) => <option value={author.id}>{author.name}</option>)
      }
    }
submitform(e){
    e.preventDefault()
    console.log(this.state);
    this.props.assignAuthor(
        {
            variables:{
               name:this.state.bookname,genr:this.state.genre,AuthId:this.state.authorId
            },
            refetchQueries:[{query:getBooksquery}]
            
        }  
    )
}
    render() {
    
      //  var data = (!this.props.data.loading?this.props.data.allauthor.map((author) => <option value={author.id}>{author.name}</option>):<div>...loading</div>)

        return (
            <form onSubmit={this.submitform.bind(this)}>
                <label> Book :</label>
                <input type="text" onChange={(event) => this.setState({ bookname: event.target.value })} />
                <br></br>

                <label> Generation :</label>
                <input type="text" onChange={(event) => this.setState({ genre: event.target.value })} />

                <br></br>
                <select onChange={(event)=>this.setState({authorId:event.target.value})}>
                    <option>select author</option>
                    {this.displayAuthors()}
                </select>
<button>add</button>
            </form>

        )
    }
}
export default compose(graphql(getAuhors, { name: 'getAuhors' }), graphql(assignAuthor, { name: 'assignAuthor' }))(AddBook);