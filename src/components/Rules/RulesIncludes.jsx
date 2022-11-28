import React from 'react'

export default function RulesIncludes({ handleCheckbox }) {

  const checkboxArray = [
    { "name": "lowercase", "text": "minuscules" },
    { "name": "uppercase", "text": "majuscules" },
    { "name": "number", "text": "numériques" },
    { "name": "special", "text": "spéciaux" }
  ]

  
  return (
    <section className="rules_includes">
      {checkboxArray.map((element, i) => {
        return (
          <article className="rules_includes_wrapper" key={i}>
            <input type="checkbox" name={element.name} id={element.name} value={element.name} onClick={handleCheckbox} />
            <label htmlFor={element.name}>Caractères {element.text}</label>
          </article>
        )
      })}
    </section>
  )
}
