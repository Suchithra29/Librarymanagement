// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import '../styles/readbooks.css'

// const ReadBooks = () => {
//     let params = useParams()
//     let bookId = params.id;

//     let [book, setBook] = useState([])

//     // let [short,setShort] =useState(false)

//     let [showShort, setShowShort] =useState(true);

//     let toggleDescription = () => {
//         // setShowShort((prevShowShort) => !prevShowShort);
//         setShowShort(!showShort)
//     };

//     useEffect(() => {
//         let fetchApi = async () => {
//             let url = await fetch(`http://localhost:4000/books/${bookId}`)
//             let resp = await url.json();
//             setBook(resp);

//         }
//         fetchApi()
//     }, [book])

//     let { id, title, thumbnailUrl, shortDescription, longDescription, authors, categories, pageCount } = book;
//     console.log(title)
//     return (
//         <>
//     <div className="book">
//         <div className="left">
//             {/* <div className="idd">{id}</div> */}
//             <div className="image">
//                 <img src={thumbnailUrl} alt="" />
//             </div>
//         </div>
//         <div className="right">
//             <div className="titl">{title}</div>
//             <button onClick={toggleDescription}>
//                 {showShort ? 'Show Long Description' : 'Show Short Description'}
//             </button>
//             {showShort ? (
//                 <div className="short">
//                     <span>Short Description:</span> {shortDescription}
//                 </div>
//             ) : (
//                 <div className="long">
//                     <span>Long Description:</span> {longDescription}
//                 </div>
//             )}
//         </div>

//     </div>
//     <div className="box">
//         <div className="b1"><span>Authors:</span>{authors}</div>
//         <div className="b2"><span>Category:</span>{categories}</div>
//         <div className="b3"><span>PageCount:</span>{pageCount}</div>
//     </div>
// </>
// )
// }

// export default ReadBooks

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import "./ReadBooks.css"

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const ReadBooks = () => {
    let params = useParams()
    let bookId = params.id;

    let [book, setBook] = useState([])
    
    const [showShort, setShowShort] = useState(true);

    const toggleShort = () => {
        setShowShort(!showShort);
    };

    const [showLong, setShowLong] = useState(true);

    const toggleLong = () => {
        setShowLong(!showLong);
    };

    useEffect(() => {
        let fetchApi = async () => {
            let url = await fetch(`http://localhost:4000/books/${bookId}`)
            let resp = await url.json();
            setBook(resp);

        }
        fetchApi()
    }, [book]);

    let nav = useNavigate()
    let loc = useLocation()
    let path = loc.pathname.startsWith("/adminportal")

    let handleBack =()=>{
      if(path){
        nav("/adminportal/books")
      }
      else{
        nav("/userportal/books")
      }
    }

    let { id, title, thumbnailUrl, shortDescription, longDescription ,authors,categories,pageCount,status} = book;
    console.log(title)
    return (
        <>
            <div className="book">
                <div className="left">
                    <div className="image">
                        <img src={thumbnailUrl} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="titl">{title}</div>
                    <div className="short">
                        <div  className="heading" onClick={toggleShort}>Short Description: {showShort ? "" : shortDescription}
                        <div>
                            {showShort ? (<KeyboardDoubleArrowDownIcon/>
                            ):(<KeyboardDoubleArrowUpIcon/>)}
                        </div>
                        </div>
                    </div>
                    <div className="long">
                        <div className="heading" onClick={toggleLong}>Long Description: {showLong ? "" : longDescription}
                        <div>
                            {showLong ? (<KeyboardDoubleArrowDownIcon/>
                            ):(<KeyboardDoubleArrowUpIcon/>)}
                        </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleBack}>Back</button>
            </div>
            <div className="box">
                <div className="b1"><span>Status:</span><p>{status}</p></div>
                <div className="b2"><span>Category:</span><p>{categories}</p></div>
                <div className="b3"><span>PageCount:</span><p>{pageCount}</p></div>
            </div>
            
        </>
    )
}

export default ReadBooks