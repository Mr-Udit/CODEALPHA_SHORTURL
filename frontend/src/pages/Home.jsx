import React , {useState} from 'react'
import Header from '../components/Header';

const Home = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');
    const handleSubmit = () => (event) => {
        event.preventDefault()
        const url = event.target[0].value
        if (!url) {
            alert('Please enter a URL')
            return
        }
        // Here you would typically send the URL to your backend for shortening
        console.log('Shortening URL:', url)
        fetch('http://localhost:3000/api/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "url" : url }),
        }).then(response => response.json()).then(data => {
            console.log('Shortened URL:', data.shortId)
            setShortenedUrl(`http://localhost:3000/${data.shortId}`)
        }).catch(error => {
            console.error('Error shortening URL:', error)
        })
    }
  return (
    <div>
      <Header/>
      <h1 className='home-h1'>Welcome to the URL Shortener</h1>
      <form onSubmit={handleSubmit()}>
        <input type="text" placeholder="Enter URL" />
        <button type="submit">Shorten</button>
      </form>
      {shortenedUrl && (
        <div className='sorted-url'>
          <h2>Shortened URL:</h2>
          <a href={shortenedUrl} target="_blank">{shortenedUrl}</a>
          <button onClick={() => navigator.clipboard.writeText(shortenedUrl)}>copy</button>
        </div>
      )}
    </div>
  )
}

export default Home
