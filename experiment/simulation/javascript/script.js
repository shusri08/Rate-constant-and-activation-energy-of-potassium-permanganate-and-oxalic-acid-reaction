const messages = [ 
"Make yourself familiar with the equipments by hovering over them. and Press the Start button to initiate the reaction.",   
"Pick up the pipette and dispense 20 mL of (0.05(M)) oxalic acid into a conical flask. Then, Click on the pipette to transfer 10 mL of (0.02(M)) KMnO4 solution into a test tube.",
"Click 'Next' button.",
"Turn on the temperature bath by clicking the 'ON/OFF Heating' button and set the water bath temperature to 20°C (some range will be restricted) after that Click on 'Next' button.",
"Click on the thermometer, test tube and conical flask. Place all three vessels in the water bath to equilibrate for at least 5 minutes. (Click the 'ON/OFF Time' button. Timer will appear).",
"Click on the testtube and Add the KMnO4 solution of test tube in the conical flask then stop watch will started. Swirl the reaction mixture regularly without taking it out of the water bath. (if not done, error will be added up).  ",
"Record the time when the mixture will be turned to yellow/brown from bright purple.",
"Repeat the experiment and do the same for other 4 temperatures. Note down all the values.",
"Repeat the experiment and do the same for other 3 temperatures. Note down all the values.",
"Repeat the experiment and do the same for other 2 temperatures. Note down all the values.",
"Repeat the experiment and do the same for other 1 temperatures. Note down all the values.",
"Turn on the temperature bath by clicking the 'ON/OFF Heating' button and set the water bath temperature to 30°C (some range will be restricted) after that Click on 'Next' button..",
"Turn on the temperature bath by clicking the 'ON/OFF Heating' button and set the water bath temperature to 40°C (some range will be restricted) after that Click on 'Next' button..",
"Turn on the temperature bath by clicking the 'ON/OFF Heating' button and set the water bath temperature to 50°C (some range will be restricted) after that Click on 'Next' button..",
"Turn on the temperature bath by clicking the 'ON/OFF Heating' button and set the water bath temperature to 60°C (some range will be restricted) after that Click on 'Next' button..",
"Press observations button to see all readings, values and calculations",
"Press 'Next' button to see more.",
"To Restart the whole experiment, press 'Home' icon"];

const messagesh = [
"उपकरणों के ऊपर माउस ले जाकर स्वयं को उनसे परिचित कराएं. और रिएक्शन को प्रारंभ करने के लिए 'प्रारंभ' बटन दबाएं ।",
"पिपेट उठाएं और एक शंक्वाकार फ्लास्क में 20 mL 0.05(M) ऑक्सालिक एसिड डालें। फिर, 10 mL 0.02(M) KMnO4 घोल को एक परखनली में स्थानांतरित करने के लिए पिपेट पर क्लिक करें",
"'Next' बटन पर क्लिक करें.",
"'ON/OFF Heating' बटन पर क्लिक करके तापमान स्नान चालू करें और जल स्नान तापमान को 20 डिग्री सेल्सियस पर सेट करें (कुछ सीमा प्रतिबंधित होगी) उसके बाद 'Next' बटन पर क्लिक करें",
"थर्मामीटर, टेस्ट ट्यूब और शंक्वाकार फ्लास्क पर क्लिक करें। तीनों बर्तनों को कम से कम 5 मिनट के लिए पानी के स्नान में संतुलित करने के लिए रखें। ('ON/OFF Heating' बटन पर क्लिक करें। टाइमर दिखाई देगा).",
"टेस्टट्यूब पर क्लिक करें और शंक्वाकार फ्लास्क में टेस्टट्यूब का KMnO4 घोल डालें, फिर स्टॉप वॉच शुरू हो जाएगी। प्रतिक्रिया मिश्रण को पानी के स्नान से बाहर निकाले बिना नियमित रूप से घुमाएँ। (यदि नहीं किया गया तो त्रुटि जोड़ दी जाएगी).",
"उस समय को रिकॉर्ड करें जब मिश्रण चमकीले बैंगनी से पीले/भूरे रंग में बदल जाएगा.",
"प्रयोग को दोहराएं और अन्य 4 तापमानों के लिए भी ऐसा ही करें। सभी मूल्यों को नोट कर लें.",
"प्रयोग को दोहराएं और अन्य 3 तापमानों के लिए भी ऐसा ही करें। सभी मूल्यों को नोट कर लें.",
"प्रयोग को दोहराएं और अन्य 2 तापमानों के लिए भी ऐसा ही करें। सभी मूल्यों को नोट कर लें.",
"प्रयोग को दोहराएं और अन्य 1 तापमानों के लिए भी ऐसा ही करें। सभी मूल्यों को नोट कर लें.",
"'ON/OFF Heating' बटन पर क्लिक करके तापमान स्नान चालू करें और जल स्नान तापमान को 30 डिग्री सेल्सियस पर सेट करें (कुछ सीमा प्रतिबंधित होगी) उसके बाद 'Next' बटन पर क्लिक करें",
"'ON/OFF Heating' बटन पर क्लिक करके तापमान स्नान चालू करें और जल स्नान तापमान को 40 डिग्री सेल्सियस पर सेट करें (कुछ सीमा प्रतिबंधित होगी) उसके बाद 'Next' बटन पर क्लिक करें",
"'ON/OFF Heating' बटन पर क्लिक करके तापमान स्नान चालू करें और जल स्नान तापमान को 50 डिग्री सेल्सियस पर सेट करें (कुछ सीमा प्रतिबंधित होगी) उसके बाद 'Next' बटन पर क्लिक करें",
"'ON/OFF Heating' बटन पर क्लिक करके तापमान स्नान चालू करें और जल स्नान तापमान को 60 डिग्री सेल्सियस पर सेट करें (कुछ सीमा प्रतिबंधित होगी) उसके बाद 'Next' बटन पर क्लिक करें",
"सभी रेटिंग, मान और गणना देखने के लिए 'Observations' बटन दबाएँ",
"अधिक देखने के लिए 'Next' बटन दबाएँ",
"पूरे प्रयोग को पुनः आरंभ करने के लिए, 'Home' आइकन दबाएँ"];
var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")
var headertext = document.querySelector("#headertext")
var instructions = document.querySelector("#INSTRUCTIONS")
var mes1  

var counter=0

var lang
function hindi1(){
    document.getElementById('header').style.display='flex'
    console.log(lang)
    lang="hindi"
    langselector.style.visibility="hidden"
    headertext.innerText="पोटेशियम परमैंगनेट और ऑक्सालिक एसिड प्रतिक्रिया की दर स्थिरांक और सक्रियण ऊर्जा"
    next.innerText="प्रारंभ"
    instructions.innerText="निर्देश :"
    update()
}

function eng1(){
    document.getElementById('header').style.display='flex'
    console.log(lang)
    lang="eng"
    langselector.style.visibility="hidden"
    headertext.innerText="Rate Constant and Activation Energy of Potassium Permanganate and Oxalic Acid Reaction"
    next.innerText="Start"
    instructions.innerText="Instructions :-"
    update() 
}

// const voices = speechSynthesis.getVoices()
function speech1(){
    speechSynthesis.cancel()
    // console.log(voices)
    if(lang=="hindi"){
        mes1=messagesh[counter-1]
    }
    else if(lang=="eng"){
        mes1=messages[counter-1]
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        const voices = speechSynthesis.getVoices()
        const voice1 = voices.find(voice => voice.name === 'Microsoft Kalpana - Hindi (India)')
        const voice = voices.find(voice => voice.name === 'Microsoft Zira - English (United States)')
        if(lang=="hindi"){
            utterance.voice=voice1
            // console.log(voices)
            utterance.lang='hi-IN';
            // console.log(utterance.voice)
        }
        else if(lang=="eng"){
            utterance.voice=voice
            utterance.lang='en-IN';
            // console.log(utterance.voice)
        }
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

    var inst=document.querySelector("#message")
     inst.innerText=messages[counter]
     
function update(){
      console.log(messages[counter])
      if(lang=="hindi"){
          inst.innerText=messagesh[counter]
      }
      else if(lang=="eng"){
          inst.innerText=messages[counter]
      }
      counter+=1
      speech1()
  }

