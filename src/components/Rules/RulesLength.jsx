import React from 'react'

export default function RulesLength({ thisLength, handleChange }) {
  
  return (
    <section className="rules_length">
      <article className="rules_length_output">
        <p className="rules_length_output_title">Nombre de caractères</p>
        <p className="rules_length_output_result">{thisLength}</p>
      </article>

      <article className="rules_length_input">
        <input type="range" id="length" name="length" min="0" max="20" step="1" defaultValue="10" onChange={handleChange} />
      </article>
    </section>
  )
}
