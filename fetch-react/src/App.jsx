import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data))
  },[])

  return (
    <ul>
      {
        post?.map(({ title, body, id }) =>
          <li id={id} key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        )
      }
    </ul>
  )
}

export default App
