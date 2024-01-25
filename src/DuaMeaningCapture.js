import React, { useState } from 'react';

const DuaMeaningCapture = ({duas}) => {
  const [duaGroups, setDuaGroups] = useState([{ arabic: '', translation: '', transliteration: '' }]);

  const addDuaGroup = () => {
    setDuaGroups([...duaGroups, { arabic: '', translation: '', transliteration: '' }]);
  };

  const completeDuaSave = () => {
    console.log('completeSave', duaGroups);
    duas.push(...duaGroups); 
  }

  const handleArabicChange = (index, arabic) => {
    const updatedTextGroups = [...duaGroups];
    updatedTextGroups[index].arabic = arabic;
    setDuaGroups(updatedTextGroups);
  };

  const handleTranslationChange = (index, translation) => {
    const updatedTextGroups = [...duaGroups];
    updatedTextGroups[index].translation = translation;
    setDuaGroups(updatedTextGroups);
  };

  const handleTrasliterationChange = (index, transliteration) => {
    const updatedTextGroups = [...duaGroups];
    updatedTextGroups[index].transliteration = transliteration;
    setDuaGroups(updatedTextGroups);
  };

  const getColour = (index, colour) => {
    if (index % 2 === 0) {
      return '#A9A9A9';
    } else {
      return '#F0FFF0';
    }
  }


  return (
    <div>
      <h2>Add dua , translation and transliteration in order .</h2>
      {duaGroups.map((duaGroup, index) => (
        <div key={index} style={{'background-color':getColour(index)}}>
          <label htmlFor={`arabic-${index}`}>{`Arabic - ${index+1}`}</label>
          <textarea
          style={{'background-color':getColour(index)}}
            type="text"
            id={`arabic-${index}`}
            value={duaGroup.arabic}
            onChange={(e) => handleArabicChange(index, e.target.value)}
          />
          <label htmlFor={`translation-${index}`}>{`Translation - ${index+1}`}</label>
          <textarea
          style={{'background-color':getColour(index)}}
            type="text"
            id={`translation-${index}`}
            value={duaGroup.translation}
            onChange={(e) => handleTranslationChange(index, e.target.value)}
          />
          <label htmlFor={`transliteration-${index}`}>{`Transliteration - ${index+1}`}</label>
          <textarea
          style={{'background-color':getColour(index)}}
            type="text"
            id={`transliteration-${index}`}
            value={duaGroup.transliteration}
            onChange={(e) => handleTrasliterationChange(index, e.target.value)}
          />
        </div>
        
      ))}
      <button onClick={addDuaGroup}>Add Dua Group</button>
      <button onClick={completeDuaSave}>Save Dua Group</button>
    </div>
  );
};

export default DuaMeaningCapture;
