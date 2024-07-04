import React from 'react'
import './LuckySeven.css';

let winningGif = "https://media0.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif?cid=6c09b952jiuyytoomktbgkdem6gy2tm8q69mr76qjog0wlg9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
let losingGif = "https://media2.giphy.com/media/mcH0upG1TeEak/giphy.gif?cid=6c09b9526vs6ukna2e0ese9zo2jnxxwv9fhhrkolhorv2y93&ep=v1_gifs_search&rid=giphy.gif&ct=g"
const LuckySeven = () => {
     let randomNumber = Math.floor(Math.random() * 10 + 1);     

  return (
    <div>
        <h3 className='luckySevenHeading'>LuckySeven</h3>
        <div className='luckyNumber'>Lucky Number is : {randomNumber}</div>
        {randomNumber == 7 && <img className='img' src={winningGif} />}
        {randomNumber != 7 && <img className='img' src={losingGif} />}
    </div>
  )
}

export default LuckySeven