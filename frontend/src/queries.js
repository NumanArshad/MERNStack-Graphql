import { gql } from 'apollo-boost'
const getBooksquery = gql`{
    allBooks{
        title
        genre
        id

    }
}`
const getAuhors = gql`
{
    allauthor{
        id
        name

    }
}`
const assignAuthor = gql`
mutation($name:String,$genr:String,$AuthId:String){
    addBook(moviename:$name,genenration:$genr,authId:$AuthId){
        
        title
    }
    
}`
const specificbook = gql`
    query($Id:ID){
        book(book_id:$Id){
            title
            genre
  writtenBy{
    name
    
  }
        }
    
}`
export { getBooksquery, getAuhors, assignAuthor, specificbook }