import React, { useEffect, useState } from 'react';
import TextMeaningCapture from './TextMeaningCapture';

const DuaCapture = () => {
  const [duaInfo, setDuaInfo] = useState({
    id: '',
    name: '',
    arabic: '',
    translation: '',
    transliteration: '',
    categoryName: '',
    categoryId: '',
    duaTime: '',
    duaDate: '',
    duaPeriod: '',
    duaPlace: '',
    duaSource: '',
    duaIsQuranic: false,
    duaSourceReference: '',
    duaPreText: '',
    duaPostText: '',
    count: 0,
    wordbyword: []
  });

  useEffect(() => {

  }, [duaInfo]);

  const resetPage = () => {
    setDuaInfo({
      id: '',
      name: '',
      arabic: '',
      translation: '',
      transliteration: '',
      categoryName: '',
      categoryId: '',
      duaTime: '',
      duaDate: '',
      duaPeriod: '',
      duaPlace: '',
      duaSource: '',
      duaIsQuranic: false,
      duaSourceReference: '',
      duaPreText: '',
      duaPostText: '',
      count: 0,
      wordbyword: []
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDuaInfo({
      ...duaInfo,
      [name]: value,
    });
  };

  const saveDua = () => {
    console.log('saveDua');
    const dataToSave = {
      name: duaInfo.name,
      arabic: duaInfo.arabic,
      translation: duaInfo.translation,
      transliteration: duaInfo.transliteration,
      wordbyword: duaInfo.wordbyword,
      count: duaInfo.count,
    };

    console.log(dataToSave);
    // Convert the object to a JSON string
    const jsonString = JSON.stringify(dataToSave);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = (duaInfo.name ? duaInfo.name : 'no_name') + '.json';

    // Trigger a click event on the download link
    a.click();

    // Revoke the URL to free up resources
    URL.revokeObjectURL(url);

    resetPage();

    // id: '',
    // name: '',
    // arabic: '',
    // translation: '',
    // transliteration: '',
    // categoryName: '',
    // categoryId: '',
    // duaTime: '',
    // duaDate: '',
    // duaPeriod: '',
    // duaPlace: '',
    // duaSource: '',
    // duaIsQuranic: false,
    // duaSourceReference: '',
    // duaPreText: '',
    // duaPostText: '',
    // count: 0,
    // wordbyword:[]
  };

  return (
    <div>
      <div>
        <h2>Dua Capture</h2>
        <form>
          <div>
            <label htmlFor="id">Dua ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={duaInfo.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">category Name:</label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              value={duaInfo.categoryName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">category ID:</label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              value={duaInfo.categoryId}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Dua Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={duaInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="arabic">Dua in Arabic:</label>
            <textarea
              type="text"
              id="arabic"
              name="arabic"
              value={duaInfo.arabic}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="translation">Dua Translation:</label>
            <textarea
              type="text"
              id="translation"
              name="translation"
              value={duaInfo.translation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="transliteration">Dua Transliteration:</label>
            <textarea
              type="text"
              id="transliteration"
              name="transliteration"
              value={duaInfo.transliteration}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="count">Dua Count:</label>
            <input
              type="number"
              id="count"
              name="count"
              value={duaInfo.count}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="duaTime">duaTime:</label>
            <input
              type="text"
              id="duaTime"
              name="duaTime"
              value={duaInfo.duaTime}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaDate">duaDate:</label>
            <input
              type="text"
              id="duaDate"
              name="duaDate"
              value={duaInfo.duaDate}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPeriod">duaPeriod:</label>
            <input
              type="text"
              id="duaPeriod"
              name="duaPeriod"
              value={duaInfo.duaPeriod}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPlace">duaPlace:</label>
            <input
              type="text"
              id="duaPlace"
              name="duaPlace"
              value={duaInfo.duaPlace}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaSource">duaSource:</label>
            <input
              type="text"
              id="duaSource"
              name="duaSource"
              value={duaInfo.duaSource}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaIsQuranic">duaIsQuranic:</label>
            <input
              type="checkbox"
              id="duaIsQuranic"
              name="duaIsQuranic"
              checked={duaInfo.duaIsQuranic}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaSourceReference">duaSourceReference:</label>
            <input
              type="text"
              id="duaSourceReference"
              name="duaSourceReference"
              value={duaInfo.duaSourceReference}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPreText">duaPreText:</label>
            <input
              type="text"
              id="duaPreText"
              name="duaPreText"
              value={duaInfo.duaPreText}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPostText">duaPostText:</label>
            <input
              type="text"
              id="duaPostText"
              name="duaPostText"
              value={duaInfo.duaPostText}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div>
        <TextMeaningCapture wordbyword={duaInfo.wordbyword} />
      </div>
      <button onClick={saveDua}>Save</button>
    </div>
  );
};

export default DuaCapture;
