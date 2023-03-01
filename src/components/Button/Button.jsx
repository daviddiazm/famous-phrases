import React from 'react'

function Button({changePhrase}) {
  return (
    <button className='buttom__changer' onClick={changePhrase}>
      →
    </button>
  )
}

export default Button