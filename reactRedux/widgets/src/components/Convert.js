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
  const [debouncedText, setDebouncedText] = useState(text);

  /**
   * start a timer for 500 milliseconds that will setDebouncedText (the thing that makes the api request) however if the text changes before the timer ends then the component is re-rendered and therefore the timer starts again. 
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId); 
    }
  }, [text]); // invoked when we first mount the component, when text changes

  /**
   * the debounced text useEffect here will make the api call, but only once debounced text has been updated, and that is updated after a delay - because the other component acts as a de-bouncer, a way to reduce un-necessary api calls
   */
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText, 
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        }
      })
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation(); // invoked when we first mount the component, when language changes and when the debouncedText changes
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
