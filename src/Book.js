import React from "react";
import propTypes from "prop-types";
import "./Book.css";

function Book({title, image, desc, comment}){
    return (
        <div className="book">
           <img src={image} alt={title}></img>
            <div className="book_data">
                <h3 className="book_title">{title}</h3>
                <h5 className="book_desc">{desc}</h5>
                <h5 className="book_comment">{comment}</h5>
            </div>
        </div>
    )
}

Book.propTypes = {
    title : propTypes.string.isRequired,
    image : propTypes.string.isRequired,
    desc : propTypes.string.isRequired,
    comment : propTypes.string.isRequired
}

export default Book;