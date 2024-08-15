import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, url, author, date, source } = props;

  return (
    <div className='my-3'>
      <div className="card " style={{ width: "18rem" }}>

        <div style={{
          display: "flex", justifyContent: "flex-end", position: "absolute", right: 0
        }} >
          <span className=" container d-flex justify-content-end badge rounded-pill bg-danger "> {source} </span>
        </div>

        <img src={imageUrl ? imageUrl : "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1106%2Fr1086886_1296x729_16%2D9.jpg"} className="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title ">{title}..</h5>
          <p className="card-text">{description}..</p>
          <p className="card-text"><small className=' text-success'><b>By</b> {author ? author : "Unknown"} <b>On</b> {new Date(date).toGMTString()}</small></p>
          <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-info">Read More..</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItem
