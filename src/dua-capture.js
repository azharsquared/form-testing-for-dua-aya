import React, { useEffect, useState } from 'react';
import TextMeaningCapture from './TextMeaningCapture';
import DuaMeaningCapture from './DuaMeaningCapture';

const DuaCapture = () => {
  const [duaInfo, setDuaInfo] = useState({
    id: '',
    name: '',
    duas: [],
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
    nameInMalayalam:'',
    count: 1,
    wordbyword: []
  });

  useEffect(() => {
    console.log('duaInfo', duaInfo);

  }, [duaInfo]);

  const resetPage = () => {
    setDuaInfo({
      id: '',
      name: '',
      duas: [],
      // arabic: '',
      // translation: '',
      // transliteration: '',
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
      nameInMalayalam:'',
      count: 1,
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

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    setDuaInfo({
      ...duaInfo,
      [name]: value,
    });
  };

  
  const saveDua = () => {
    console.log('saveDua');

    if(duaInfo.id =='' || duaInfo.categoryId == ''){
      alert('Please enter dua id and select a category');
      return;
    }
    
    const dataToSave = {
      id: duaInfo.id,
      name: duaInfo.name,
      duas: duaInfo.duas,
      categoryName: duaInfo.categoryName,
      categoryId: duaInfo.categoryId,
      duaTime: duaInfo.duaTime,
      duaDate: duaInfo.duaDate,
      duaPeriod: duaInfo.duaPeriod,
      duaPlace: duaInfo.duaPlace,
      duaSource: duaInfo.duaSource,
      duaIsQuranic: duaInfo.duaIsQuranic,
      duaSourceReference: duaInfo.duaSourceReference,
      duaPreText: duaInfo.duaPreText,
      duaPostText: duaInfo.duaPostText,
      nameInMalayalam: duaInfo.nameInMalayalam,
      count: duaInfo.count,
      wordbyword: duaInfo.wordbyword
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
    a.download = (duaInfo.categoryId +"."+ duaInfo.id) + '.json';

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
        <h2>Enter a dua</h2>
        <div>
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
            <label htmlFor="categoryId">Select a category:</label>
            {/* <input
              type="text"
              id="categoryName"
              name="categoryName"
              value={duaInfo.categoryName}
              onChange={handleInputChange}
            /> */}
            <select id="categoryId" name="categoryId" onChange={handleCategoryChange} value={duaInfo.categoryId}>
                  <option value="">Select one</option>
                  <option value="1">Adhkaru sabah</option>
                  <option value="2">Adhkaru masah</option>
                  <option value="3">prayer after salah</option>
                  <option value="4">When wearing a garment</option>
                  <option value="5">When wearing a new garment</option>
                  <option value="6">To someone wearing a new garment</option>
                  <option value="7">Before undressing</option>
                  <option value="8">Before entering the toilet</option>
                  <option value="9">After leaving the toilet</option>
                  <option value="10">When starting ablution</option>
                  <option value="11">Upon completing the ablution</option>
                  <option value="12">When leaving the home</option>
                  <option value="13">Upon entering the home</option>
                  <option value="14">When going to the mosque</option>
                  <option value="15">Upon entering the mosque</option>
                  <option value="16">Upon leaving the mosque</option>
                  <option value="17">Upon hearing Adhaan (call to prayer)</option>
                  <option value="18">At the start of the prayer</option>
                  <option value="19">While in rukoo</option>
                  <option value="20">Upon rising from rukoo</option>
                  <option value="21">While prostrating [sujood]</option>
                  <option value="22">Between two prostrations</option>
                  <option value="23">Prostration due to Quran recitation</option>
                  <option value="24">The Tashahhud</option>
                  <option value="25">Prayers upon the Prophet after tashahhud</option>
                  <option value="26">After the last tashahhud and before salam</option>
                  <option value="27">Dua after salaam</option>
                  <option value="28">Istikharah (Seeking Allah's help in making a decision)</option>
                  <option value="29">Dua in the morning & evening</option>
                  <option value="30">Dua before sleeping</option>
                  <option value="31">When turning over during the night</option>
                  <option value="32">Upon experiencing fear or unrest during sleep</option>
                  <option value="33">Upon seeing a good or a bad dream</option>
                  <option value="34">Dua Qunut in Witr prayer</option>
                  <option value="35">After salaam of the Witr prayer</option>
                  <option value="36">Anxiety and sorrow</option>
                  <option value="37">When in distress</option>
                  <option value="38">Upon encountering an enemy or those of authority</option>
                  <option value="39">Dua against the oppression of rulers</option>
                  <option value="40">Dua made against an enemy</option>
                  <option value="41">What to say when in fear of people</option>
                  <option value="42">If afflicted with doubt in his faith</option>
                  <option value="43">Settling a debt</option>
                  <option value="44">If afflicted by whisperings in prayer or recitation</option>
                  <option value="45">When one's affairs have become difficult</option>
                  <option value="46">Upon committing a sin</option>
                  <option value="47">For expelling the devil and his whisperings</option>
                  <option value="48">When stricken with a mishap or overtaken by an affair</option>
                  <option value="49">Congratulation on the occasion of a birth</option>
                  <option value="50">Placing children under Allah's protection</option>
                  <option value="51">Excellence of visiting the sick</option>
                  <option value="52">When visiting the sick</option>
               </select>
          </div>
          {/* <div>
            <label htmlFor="name">category ID:</label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              value={duaInfo.categoryId}
              onChange={handleInputChange}
            />
          </div> */}
          <div>
            <label htmlFor="nameInMalayalam">What is the name of dua (in malayalam):</label>
            <input
              type="text"
              id="nameInMalayalam"
              name="nameInMalayalam"
              value={duaInfo.nameInMalayalam}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">What is the name of dua (in English):</label>
            <input
              type="text"
              id="name"
              name="name"
              value={duaInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <DuaMeaningCapture duas={duaInfo.duas} />
          </div>
          <div>
            <label htmlFor="count">How many times we need to repeat(Count in numbers):</label>
            <input
              type="number"
              id="count"
              name="count"
              value={duaInfo.count}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="duaTime">when we need to recite (provide exact time ):</label>
            <input
              type="text"
              id="duaTime"
              name="duaTime"
              value={duaInfo.duaTime}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaDate">Is this dua needed on specific date (Arabic date):</label>
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
            <label htmlFor="duaPlace">Is this recited in any specific place (like in toilet etc)</label>
            <input
              type="text"
              id="duaPlace"
              name="duaPlace"
              value={duaInfo.duaPlace}
              onChange={handleInputChange}
            />
          </div>

          {/* <div>
            <label htmlFor="duaSource">duaSource:</label>
            <input
              type="text"
              id="duaSource"
              name="duaSource"
              value={duaInfo.duaSource}
              onChange={handleInputChange}
            />
          </div> */}

          <div>
            <label htmlFor="duaIsQuranic">Is dua from quran ?</label>
            <input
              type="checkbox"
              id="duaIsQuranic"
              name="duaIsQuranic"
              checked={duaInfo.duaIsQuranic}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaSourceReference">Provide reference (like surah and ayath)</label>
            <input
              type="text"
              id="duaSourceReference"
              name="duaSourceReference"
              value={duaInfo.duaSourceReference}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPreText">Is there a pre text ?</label>
            <textarea
              type="text"
              id="duaPreText"
              name="duaPreText"
              value={duaInfo.duaPreText}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="duaPostText">provide post text if any </label>
            <textarea
              type="text"
              id="duaPostText"
              name="duaPostText"
              value={duaInfo.duaPostText}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div>
        <TextMeaningCapture wordbyword={duaInfo.wordbyword} />
      </div>
      <button onClick={saveDua}>Save</button>
    </div>
  );
};

export default DuaCapture;
