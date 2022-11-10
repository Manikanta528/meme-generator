import React from 'react'


function Meme() {


  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })
  
  const [allMeme, setAllMeme] = React.useState([])

  React.useEffect(() => {
      fetch('https://api.imgflip.com/get_memes')
      .then( res => res.json())
      .then( data => setAllMeme(data.data.memes))
  }, [])

  
  function getMemeImg () {
        const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
          return{
            ...prevMeme,
            randomImage : url
          }
        })
  }

  function handleChange(event){
    const {name , value} = event.target
    //console.log(value)
    setMeme(prevMeme =>{
      return{
        ...prevMeme,
        [name] : value
      }
    })

  }

  return (
    <main className='meme'>
        <div className='meme-holders'>
            <input
                type="text" 
                placeholder='Top Text'
                className='form-input'
                name="topText"
                value = {meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder='bottom Text'
                className='form-input'
                name="bottomText"
                value = {meme.bottomText}
                onChange={handleChange}
            />
            <button className='btn' onClick={getMemeImg} >Get a new meme image  🖼</button>
        </div>
        
        <div className="meme-flex">
                <h2 className="meme--text top">{meme.topText}</h2>
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme