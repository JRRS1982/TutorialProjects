/**
 * accept two props 1> text we want to convert 2> language we want to convert to
 *
 * send a request to google translate
 *
 * update state with data from the response
 */

import React, { useState, useEffect } from "react";
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text, 
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        }
      })
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation(); // invoked when we first mount the component, when language changes and when the text changes
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
