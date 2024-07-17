import React, {useEffect, useState } from 'react'
import "./Books.css"
import { useLocation,useNavigate } from 'react-router-dom'

const Books = () => {

  let [books, setBook] = useState([])

  useEffect(() => {
    let fetchApi = async () => {
      let url = await fetch(`http://localhost:4000/books`);
      let resp = await url.json();
      setBook(resp)
    }
    fetchApi();
  }, [books]);

  let navigate = useNavigate()
  let loc = useLocation()
  let path = loc.pathname.startsWith("/adminportal");

  let readBooks = (id) => {
    if (path) {
      navigate(`/adminportal/readbooks/${id}`);
    }
    else {
      navigate(`/userportal/readbooks/${id}`);
    }
  }


  let deleteBook = (id, title) => {
    let bool = window.confirm(`Do you want to Delete ${title} book...?`);
    if (bool) {
      fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' });
      alert(`${title} : Book is Deleted`);
    }
    else {
      alert("Book is not Deleted")
    }
  }


  return (
    <>
      <div className="main">
        {books.map((book) => (
          // let {title,thumbnailUrl,authors,categories,pageCount} = books

          <div className="cards">
            <div className="container">
              <div key={book.id}>
                {/* <div className='id'>{book.id}</div> */}
                <h1 className='title'>{book.title}</h1>
                <div className='image'>
                  <img src={book.thumbnailUrl} alt="" />
                </div>
              </div>
              <div className="card-cont">
                <div className="auth"><span>Authors:</span>{book.authors}</div>
                <div className="cat"><span>Category:</span>{book.categories}</div>
                <div className="pagecnt"><span>Pagecount:</span>{book.pageCount}</div>
                <div className="stat"><span>Status:</span>{book.status}</div>

              </div>
              <div className="btn">
                <button onClick={() => { readBooks(book.id) }}>Read Book</button>
                {path && <button onClick={() => { deleteBook(book.id, book.title) }}>Delete</button>}
              </div>
            </div>

          </div>


        ))}
      </div>

    </>
  )
}

export default Books