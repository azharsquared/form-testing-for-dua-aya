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
                  <option value="53">When the sick have renounced all hope of life</option>
                  <option value="54">Instruction for the one nearing death</option>
                  <option value="55">For one afflicted by a calamity</option>
                  <option value="56">When closing the eyes of the deceased</option>
                  <option value="57">Dua for the deceased at the funeral prayer</option>
                  <option value="58">Dua for a deceased child at the funeral prayer</option>
                  <option value="59">Condolence</option>
                  <option value="60">When placing the deceased in the grave</option>
                  <option value="61">After burying the deceased</option>
                  <option value="62">When visiting the graves</option>
                  <option value="63">During a wind storm</option>
                  <option value="64">Upon hearing thunder</option>
                  <option value="65">Dua asking for rainfall</option>
                  <option value="66">When it rains</option>
                  <option value="67">After rainfall</option>
                  <option value="68">Asking for clear skies</option>
                  <option value="69">Upon sighting the crescent moon</option>
                  <option value="70">Upon breaking fast (Iftar)</option>
                  <option value="71">Dua before eating</option>
                  <option value="72">Upon completing the meal</option>
                  <option value="73">Dua by the guest for the host</option>
                  <option value="74">To one offering a drink or to one who intended to do that</option>
                  <option value="75">When breaking fast in someone's home</option>
                  <option value="76">By one fasting when presented with food</option>
                  <option value="77">When insulted while fasting</option>
                  <option value="78">Upon seeing the early or premature fruit</option>
                  <option value="79">Upon sneezing</option>
                  <option value="80">What is said to a kaafir when he sneezes</option>
                  <option value="81">Congratulating the newlywed</option>
                  <option value="82">On the wedding night or when buying an animal</option>
                  <option value="83">Before sexual intercourse</option>
                  <option value="84">When angry</option>
                  <option value="85">Upon seeing someone in trial or tribulation</option>
                  <option value="86">Dua said at a sitting or gathering etc.</option>
                  <option value="87">Dua at the end of a sitting/gathering [Kaffaratul Majlis]</option>
                  <option value="88">Returning a Dua of forgiveness</option>
                  <option value="89">To one who does you a favour</option>
                  <option value="90">Protection from the Dajjal</option>
                  <option value="91">To one who pronounces his love for you, for Allah's sake</option>
                  <option value="92">To one who has offered you some of his wealth</option>
                  <option value="93">To the debtor when his debt is settled</option>
                  <option value="94">For fear of shirk</option>
                  <option value="95">Dua to one who says 'May Allaah bless you'</option>
                  <option value="96">Forbiddance of ascribing things to omens</option>
                  <option value="97">When mounting an animal or any means of transport</option>
                  <option value="98">Dua for travel</option>
                  <option value="99">Upon entering a town or village</option>
                  <option value="100">When entering the market</option>
                  <option value="101">When the mounted animal (or mean of transport) stumbles</option>
                  <option value="102">Dua of the traveller for the resident</option>
                  <option value="103">Dua of the resident for the traveller</option>
                  <option value="104">Dua while ascending or descending</option>
                  <option value="105">Prayer of the traveller as dawn approaches</option>
                  <option value="106">Stopping or lodging somewhere</option>
                  <option value="107">While returning from travel</option>
                  <option value="108">Upon receiving pleasing or displeasing news</option>
                  <option value="109">Excellence of sending prayers upon the Prophet</option>
                  <option value="110">Excellence of spreading the Islamic greeting</option>
                  <option value="111">Returning a greeting to a disbeliever</option>
                  <option value="112">Upon hearing a rooster crow, ass bray or dogs barking</option>
                  <option value="113">Etiquette of retiring for the night</option>
                  <option value="114">For one you have insulted</option>
                  <option value="115">Etiquette of praising a fellow Muslim</option>
                  <option value="116">For the one that have been praised</option>
                  <option value="117">Pilgrim's arrival for Hajj/Umrah – Talbiya</option>
                  <option value="118">Takbir when passing the black stone</option>
                  <option value="119">Between the Yemeni corner and black stone [Ka'bah]</option>
                  <option value="120">When at Mount Safa and Mount Marwah</option>
                  <option value="121">The Day of 'Arafah</option>
                  <option value="122">Sacred Site [al-Mash'ar al-Haraam] - At Muzdalifa</option>
                  <option value="123">When throwing each pebble at the Jamarat</option>
                  <option value="124">At times of amazement and delight</option>
                  <option value="125">Upon receiving pleasant news</option>
                  <option value="126">When feeling some pain in the body</option>
                  <option value="127">When in fear of afflicting someone with one's eye</option>
                  <option value="128">When startled</option>
                  <option value="129">When slaughtering or sacrificing an animal</option>
                  <option value="130">To ward off the deception of the Obstinate Shaytans</option>
                  <option value="131">Seeking forgiveness & repentance</option>
                  <option value="132">Excellence of Zikr & glorification of Allaah</option>
                  <option value="133">How the Prophet (saws) made tasbeeh</option>
                  <option value="134">General and Beneficent rules</option>
                  <option value="135">Surah Fatiha 1:1-7</option>
                  <option value="136">Protection from being ignorant [2:67]</option>
                  <option value="137">Surah Al-Baqarah - 2:126</option>
                  <option value="138">Seeking acceptance of deeds & becoming a devout muslim [2:127-128]</option>
                  <option value="139">Seeking good of this world and the hereafter [2:201]</option>
                  <option value="140">Seeking patience, firmness and victory [2:250]</option>
                  <option value="141">Surah Al-Baqarah 2:285</option>
                  <option value="142">Surah Al-Baqarah 2:286</option>

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
