import React from 'react'

function Button({changePhrase}) {
  return (
    <button className='buttom__changer' onClick={changePhrase}>
      <i class="fa-solid fa-arrows-rotate btn_re"></i>
    </button>
  )
}

export default Button