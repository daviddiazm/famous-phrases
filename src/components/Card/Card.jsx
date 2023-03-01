import React from 'react'

import "./Card.css";

function Card({phrasesInfo}) {
  return (
    <section className="card">
      <article className="card__phrase"><h4>{phrasesInfo.quote}</h4></article>
      <h5 className="card__autor">{phrasesInfo.author}</h5>
    </section>
  )
}

export default Card