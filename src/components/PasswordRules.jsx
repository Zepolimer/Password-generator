import React, { useState } from 'react'
import RulesIncludes from './Rules/RulesIncludes';
import RulesLength from './Rules/RulesLength'
import RulesStrength from './Rules/RulesStrength';


export default function PasswordRules({ setThisPassword }) {

  const lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberArr = '01234567890123456789135790'
  const specialArr = '&@#!$*%_*%$!#@&_&@#!$*%_/-+'

  const [thisLength, setThisLength] = useState(10);
  const [thisCheckbox, setThisCheckbox] = useState([]);

  const handleChange = (e) => {
    setThisLength(e.target.value);
  }

  const handleCheckbox = (e) => {
    if(e.target.checked == true) {
      setThisCheckbox(checkboxArray => [...checkboxArray, e.target.id])
    } else if(e.target.checked == false) {
      setThisCheckbox(thisCheckbox.filter(checkbox => checkbox !== e.target.value))
    }
  }

  const generatePassword = () => {
    let password = "";
    let includes = "";

    if(!thisCheckbox.includes('lowercase') && 
       !thisCheckbox.includes('uppercase') && 
       !thisCheckbox.includes('number') && 
       !thisCheckbox.includes('special')) {
        return;
    }

    if(thisCheckbox.includes('lowercase')) includes += lowercaseArr;
    if(thisCheckbox.includes('uppercase')) includes += uppercaseArr;
    if(thisCheckbox.includes('number')) includes += numberArr;
    if(thisCheckbox.includes('special')) includes += specialArr;

    for (let index = 0; index < thisLength; ++index) {
      password += includes[Math.floor(Math.random() * includes.length)];
    }

    setThisPassword(password)
  }


  return (
    <article className="password_rules">
      <RulesLength handleChange={handleChange} thisLength={thisLength} />

      <RulesIncludes handleCheckbox={handleCheckbox} />

      <RulesStrength thisLength={thisLength} thisCheckbox={thisCheckbox} />

      <button className="password_rules_generate" onClick={generatePassword}>
        <span>Générer</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
          <path fill="currentColor" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"></path>
        </svg>
      </button>
    </article>
  )
}
