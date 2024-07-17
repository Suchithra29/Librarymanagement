import React, { useRef } from 'react'
import "../addbooks.css"


const Addbooks = () => {

  let bookTitle = useRef()
  let imgurl = useRef()
  let Auth = useRef()
  let cate = useRef()
  let pagecount= useRef()
  let statu=useRef()

  let handleSubmit = (e) => {
    e.preventDefault()


    let newBooks = {
      title: bookTitle.current.value,
      thumbnailUrl: imgurl.current.value,
      authors: [Auth.current.value],
      categories: [cate.current.value],
      pageCount:pagecount.current.value,
      status:statu.current.value

    };

    let x = fetch("http://localhost:4000/books",
      {method:'POST',
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(newBooks),
    });
  }
  return (
    <>
      <div className="addbooks">
        {/* <img src={bookimg} alt="" /> */}
        <form onSubmit={handleSubmit}>
          <input ref={bookTitle} type="text" placeholder='Enter Book Title' />
          <input ref={imgurl} type="text" placeholder='Enter image URL' />
          <input ref={Auth} type="text" placeholder='Enter Authors' />
          <input ref={cate} type="text" placeholder='Enter Category' />
          <input ref={pagecount} type="text" placeholder='Enter PageCount' />
          <input ref={statu} type="text" placeholder='Enter Status' />
          <button>Add Books</button>
        </form>
      </div>
    </>
  )
}

export default Addbooks