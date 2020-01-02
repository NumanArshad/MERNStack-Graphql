import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import BookList from './bookList'
import AddBook from './addbook'
const client=new ApolloClient({
    uri:'http://localhost:4000/graphql'
})
const App=()=>{
    return (<ApolloProvider client={client}>
<BookList />
<AddBook />
    </ApolloProvider>)
}
export default App;