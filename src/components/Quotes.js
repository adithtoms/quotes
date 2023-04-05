import { useState, useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

function Quotes() {

  //state to hold data from api
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([])
  const [bookmarked, setBookmarked] =useState(false)


  useEffect(() => {
    fetchData()
  }, [selectedTags])

  useEffect(() => {
    fetchDataTag()
  }, [])


  //function to call api


  //random
  const fetchData = async () => {
    let url;
    if (selectedTags) {
      url = `https://api.quotable.io/random?tags=${selectedTags}`
    } else {
      url = 'https://api.quotable.io/random'

    }
    const result = await fetch(url);
    result.json().then(data =>
      setQuotes(data)
    )
  }

  //tags
  const fetchDataTag = async () => {
    let url = 'https://api.quotable.io/tags'
    const result = await fetch(url);
    result.json().then(data =>
      setTags(data))
  }

  console.log(tags);

  const handleQuote = () => {
    fetchData()
  }

  const handleTagClick = (tag) => {
    setSelectedTags(tag.name)
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }


  return (
    <>

      <Card className='mt-5 mx-auto w-50'>
        <Card.Body>
          <p>{quotes.content}</p>
          <h6>~{quotes.author}</h6>
          <p>Tags:-{quotes.tags}</p>
          <button onClick={handleBookmark} ><span  style={{ backgroundColor: bookmarked ? "red" : "transparent" }} >&#9750;</span ></button>
        </Card.Body>
      </Card>
      <Button className='mt-3' variant="warning" onClick={handleQuote}>Next Quote</Button>

      <Dropdown className='mt-5'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Tags
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {tags.map((tag) => (
            <Dropdown.Item key={tag.name} onClick={() => handleTagClick(tag)}>{tag.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>


    </>
  )
}

export default Quotes