import react from "react";
import axios from "axios";
import Book from "./Book";
import "./App.css";

class App extends react.Component {

  state = {
    isLoading : true,
    books : []
  };

  getBooks = async () => {
    const {
      data:{articles}
    } = await axios.get("http://spartacodingclub.shop/post");
    this.setState({books : articles, isLoading:false})
  }

  componentDidMount(){
    setTimeout(() => {
      this.getBooks();
    }, 3000);
  } 

  render(){
    const { isLoading, books } = this.state;

    const booklist = books.map((book,index) => 
      (<Book
          key={index}
          title={book.title}
          image={book.image} 
          desc={book.desc} 
          comment={book.comment}
      />)
    );
    // const booklist = setInterval(books.map((book,index) => 
    // (<Book
    //     key={index}
    //     title={book.title}
    //     image={book.image} 
    //     desc={book.desc} 
    //     comment={book.comment}
    // />)),1000);

    return(
      <section className="container">
        {isLoading 
          ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          )
          : (
            <div className="books">
              {/* {setInterval(books.map((book,index) => 
                (<Book
                    key={index}
                    title={book.title}
                    image={book.image} 
                    desc={book.desc} 
                    comment={book.comment}
                />)), 1000)} */}
              {booklist}
            </div>
          )
        }
      </section>
    )
  }
}

export default App;