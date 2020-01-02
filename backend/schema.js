const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID,GraphQLList } = graphql;
const AuthorModel=require("./models/Author")
const BookModel=require("./models/Book")
var lodash = require('lodash');
var books = [
    { title: 'nknwf', genre: '546', id: '3',authId:'1' },
    { title: 'nknkjknwf', genre: '43', id: '1',authId:'3' },
    { title: 'jriw', genre: '45', id: '2',authId:'3' },
    { title: 'jf', genre: '4', id: '4',authId:'3' },
]
var authors = [
    { name: 'ali auth', age: '45', id: '2' },
    { name: 'akmal auth', age: '45', id: '1' },
    { name: 'ahmad auth', age: '546', id: '3' },
{ name: 'hasan auth', age: '43', id: '4' }
]
const LoginType=new GraphQLObjectType({
    name:'Login',
    fields:()=>({
        LoginId:{type:GraphQLID},
        UserName:{type:GraphQLString},
        Password:{type:GraphQLString}
    })
})
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
      bookList:{
          type:new GraphQLList(BookType),
          resolve(parent,args){
              return BookModel.find({AuthorId:parent.id})
          }
      },
       authorList:{
           type:new GraphQLList(AuthorType),
            resolve(parent,args){
                return AuthorModel.find()
            }

       }
       
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:{
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        writtenBy:{
            type:AuthorType,
            resolve(parent,args){
                return AuthorModel.findById(parent.AuthorId)
            }
        }
     
        
    }
})


const Rootquery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        allauthor:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                return AuthorModel.find();
            }
        },
        author:{
            type:AuthorType,
            args:{auth_id:{type:GraphQLID}},
            resolve(parent,args){
                return AuthorModel.findById(args.auth_id)
            }
        },
        book:{
            type:BookType,
            args:{book_id:{type:GraphQLID}},
            resolve(parent,args){
                return BookModel.findById(args.book_id)
            }
        },
        allBooks:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return BookModel.find()
            }
        }
        }
    
})
const Mutation=new  GraphQLObjectType({
    name:'Mutation',
    fields:{
        addauthor:{
            type:AuthorType,
            args:{
                authorName:{type:GraphQLString},
                age:{type:GraphQLString}
            },
            resolve(parent,args){
                let newauthor=new AuthorModel({
                    name:args.authorName,
                    age:args.age
                })
                return newauthor.save()
                 
            }
        },
        addBook:{
            type:BookType,
            args:{
                moviename:{type:GraphQLString},
                genenration:{type:GraphQLString},
                authId:{type:GraphQLString}

            },
            resolve(parent,args){
                let book=new BookModel({
                    title:args.moviename,
                    genre:args.genenration,
                    AuthorId:args.authId
                })
                return book.save()
            }
        },
        deleteAuthors:{
            type:AuthorType,
            resolve(parent,args){
                return AuthorModel.deleteMany()
            }
        },
        deleteBooks:{
            type:BookType,
            resolve(parent,args){
                return Book.deleteMany()
            }
        }
    }
    
})
module.exports = new GraphQLSchema({
    query: Rootquery,
    mutation:Mutation
})


// book: {
//     type: BookType,
//     args: { Id: { type: GraphQLID } },
//     resolve(parent, args) {
//         return lodash.find(books, { id: args.Id })
//     },
// },
    // author: {
    //     type: AuthorType,
    //    args: { authId: { type: GraphQLID } },
    //     resolve(parent, args) {
    //        // return lodash.find(authors, { id: args.authId})
    //        return AuthorModel.findById(args.authId)
    //     }
    // },
    // allBooks:{
    //     type:new GraphQLList(BookType),
    //     resolve(parent,args){
    //        // return books
    //        return BookModel.find()
    //     }
    // },
    // allAuthors:{
    //     type:new GraphQLList(AuthorType),
    //   //  args:{authId:{type:GraphQLID,}},
    //     resolve(parent,args){
    //       //  return  authors 
    //       return AuthorModel.find()
    //     }
    // }