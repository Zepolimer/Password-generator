import React, { useState, useEffect } from 'react'


export default function RulesStrength({ thisLength, thisCheckbox}) {

  const [strengthLevel, setStrengthLevel] = useState("");

  useEffect(() => {
    if(thisCheckbox.length == 1) {
      passwordLength(9, 14, 15, 18)
    } else if(thisCheckbox.length == 2) {
      passwordLength(6, 9, 10, 12)
    } else if(thisCheckbox.length == 3) {
      passwordLength(5, 8, 9, 11)
    } else if(thisCheckbox.length == 4) {
      passwordLength(4, 7, 8, 10)
    } else {
      setStrengthLevel("")
    }
  }, [thisLength, thisCheckbox])

  const passwordLength = (val1, val2, val3, val4) => {
    if(thisLength <= val1) {
      setStrengthLevel("Très Faible")
    } else if(thisLength > val1 && thisLength <= val2) {
      setStrengthLevel("Faible")
    } else if(thisLength == val3) {
      setStrengthLevel("Modérée")
    } else if(thisLength > val3 && thisLength < val4) {
      setStrengthLevel("Forte")
    } else {
      setStrengthLevel("Très Forte")
    }
  }


  return (
    <section className="rules_strength">
      <h2 className="rules_strength_title">Résistance</h2>

      <article className="rules_strength_wrapper">
        <p>{strengthLevel}</p>
        <section className="rules_strength_display">
          <span style={
            strengthLevel == "Très Faible" ? {background: "red"} : 
            strengthLevel == "Faible" ? {background: "orange"} : 
            strengthLevel == "Modérée" ? {background: "#ffe83d"} :
            strengthLevel == "Forte" ? {background: "#3bcc61"} :
            strengthLevel == "Très Forte" ? {background: "#000000"} : {background: "none"}
          }></span>
          <span style={
            strengthLevel == "Faible" ? {background: "orange"} : 
            strengthLevel == "Modérée" ? {background: "#ffe83d"} :
            strengthLevel == "Forte" ? {background: "#3bcc61"} : 
            strengthLevel == "Très Forte" ? {background: "#000000"} : {background: "none"}
          }></span>
          <span style={
            strengthLevel == "Modérée" ? {background: "#ffe83d"} :
            strengthLevel == "Forte" ? {background: "#3bcc61"} : 
            strengthLevel == "Très Forte" ? {background: "#000000"} : {background: "none"}
          }></span>
          <span  style={
            strengthLevel == "Forte" ? {background: "#3bcc61"} : 
            strengthLevel == "Très Forte" ? {background: "#000000"} : {background: "none"}
          }></span>
          <span  style={
            strengthLevel == "Très Forte" ? {background: "#000000"} : {background: "none"}
          }></span>
        </section>
      </article>
    </section>
  )
}
