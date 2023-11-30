


var message=["Click on Next Button to Start the Experiment",
"Step 1 : Click to Power Button in the Electronic Balance",
"Step 2 : Click to Petridish and Place it on an Electronic Balance",
"Step 3 : Click to Tare Button in the Electronic Balance",
"Step 4 : Click to Spatula and take Oxalic acid Crystals and Put it in the Petridish",
"Step 5 : Weigh about 0.63gm of Oxalic acid Crystals and Click on funnel & Place it on 250ml Conical flask",
"Step 6 : Click on Petridish and Carefully transfer the weighed quantity of oxalic acid crystal into a 100ml Volumetric flask",
"Step 7 : Click on Distilled Water and Add on Volumetric flask Until the 100ml level of the meniscus just touches the mark on the Volumetric flask",
"Step 8 : Click on Conical flask Shake gently to make the Oxalic acid solution uniform throughout",
"Step 9 : Click on Next Button.",
"Step 10 : Click on Pipette and Pipette out 10ml of Oxalic acid solution into a clean and dry Conical flask",
"Step 11 : Click on Pipette and Add 10ml of Dilute Sulphuric acid to the Conical flask",
"Step 12 : Click on Next Button.",
"Step 13 : Click on funnel and Place a funnel over the mouth of the burette",
"Step 14 : Click on Potassium Permanganate solution and Fill the Burette with Potassium Permanganate Solution just Zero mark using the funnel",
"Step 15 : Click on Mixture of Conical flask and Place it above the Bunsen Burner",
"Step 16 : Click on Thermometer and Put it in the Mixture of conical flask",
"Step 17 : Click on Bunsen Burner Knob to start heating and Boil the mixture to a temperature of 60 Degree Celsius",
"Step 18 : Click on Thermometer and put it on the Desk",
"Step 19 : Click on Mixture of Conical flask and Place the flask on under the Burette"]

var hmessage=["प्रयोग शुरू करने के लिए नेक्स्ट बटन पर क्लिक करें",
"चरण 1: इलेक्ट्रॉनिक बैलेंस में पावर बटन पर क्लिक करें",
"चरण 2: पेट्रीडिश पर क्लिक करें और इसे इलेक्ट्रॉनिक बैलेंस पर रखें",
"चरण 3: इलेक्ट्रॉनिक बैलेंस में टेयर बटन पर क्लिक करें",
"चरण 4: स्पैटुला पर क्लिक करें और ऑक्सालिक एसिड क्रिस्टल लें और इसे पेट्रीडिश में डालें",
"चरण 5: लगभग 0.63 ग्राम ऑक्सालिक एसिड क्रिस्टल का वजन करें और फ़नल पर क्लिक करें और इसे 250 मिलीलीटर शंक्वाकार फ्लास्क पर रखें",
"चरण 6: पेट्रिडिश पर क्लिक करें और सावधानीपूर्वक ऑक्सालिक एसिड क्रिस्टल की तौली गई मात्रा को 100 मिलीलीटर वॉल्यूमेट्रिक फ्लास्क में स्थानांतरित करें",
"चरण 7: आसुत जल पर क्लिक करें और वॉल्यूमेट्रिक फ्लास्क पर तब तक डालें जब तक मेनिस्कस का 100 मिलीलीटर स्तर वॉल्यूमेट्रिक फ्लास्क पर निशान को छू न ले",
"चरण 8: शंक्वाकार फ्लास्क पर क्लिक करें और ऑक्सालिक एसिड घोल को एक समान बनाने के लिए धीरे से हिलाएं",
"चरण 9: अगले बटन पर क्लिक करें।",
"चरण 10: पिपेट पर क्लिक करें और पिपेट द्वारा 10 मिलीलीटर ऑक्सालिक एसिड घोल को एक साफ और सूखे शंक्वाकार फ्लास्क में डालें",
"चरण 11: पिपेट पर क्लिक करें और शंक्वाकार फ्लास्क में 10 मिलीलीटर पतला सल्फ्यूरिक एसिड मिलाएं",
"चरण 12: अगला बटन पर क्लिक करें।",
"चरण 13: फ़नल पर क्लिक करें और ब्यूरेट के मुँह पर एक फ़नल रखें",
"चरण 14: पोटेशियम परमैंगनेट घोल पर क्लिक करें और फ़नल का उपयोग करके ब्यूरेट को पोटेशियम परमैंगनेट घोल से शून्य चिह्न पर भरें",
"चरण 15: शंक्वाकार फ्लास्क के मिश्रण पर क्लिक करें और इसे बन्सेन बर्नर के ऊपर रखें",
"चरण 16: थर्मामीटर पर क्लिक करें और इसे शंक्वाकार फ्लास्क के मिश्रण में डालें",
"चरण 17: गर्म करना शुरू करने के लिए बन्सेन बर्नर नॉब पर क्लिक करें और मिश्रण को 60 डिग्री सेल्सियस के तापमान तक उबालें",
"चरण 18: थर्मामीटर पर क्लिक करें और इसे डेस्क पर रखें",
"चरण 19: शंक्वाकार फ्लास्क के मिश्रण पर क्लिक करें और फ्लास्क को ब्यूरेट के नीचे रखें"]









var bglab = document.querySelector("#lab")
var reading = document.querySelector("#reading")
var pdish = document.querySelector("#petridish")
var spatula = document.querySelector("#Spatula")
var onbtn = document.querySelector("#on")
var tarebtn = document.querySelector("#tare")
var sp = document.querySelector("#sp")
var fnl = document.querySelector("#funnel")
var flask = document.querySelector("#flask")
var eflask = document.querySelector("#eflask")
var dwater = document.querySelector("#dwater")
var machine = document.querySelector("#analytical-balance")
var oacrystal = document.querySelector("#oacrystal")
var mes = document.querySelector("#text")
var water = document.querySelector("#dwater")
var wdrop = document.querySelector("#drp") 
var fflask = document.querySelector("#fflask")
var ecflask = document.querySelector("#ecflask")
var hcflask = document.querySelector("#hcflask")
var fcflask = document.querySelector("#fcflask")
var epipette = document.querySelector("#epipette")
var fpipette = document.querySelector("#fpipette")
var abeaker = document.querySelector("#abeaker")


var f=0
var messcounter=0

fnl.style.transform="translate(0%,0%)  rotate(50deg)"

function update(){
    mes.innerText=message[messcounter]
    console.log(message[messcounter])
    messcounter+=1
}

update()

function ok(){
    if(f==0){
        bglab.src="/images/LAB 1ORGLKK zoom.png"
        setTimeout(function(){
            visible()
        },500)
        f=2
        update()
    }

else if(f==11){
    pdish.style.opacity="0%"
    reading.style.opacity="0%"
    spatula.style.opacity="0%"
    onbtn.style.opacity="0%"
    tarebtn.style.opacity="0%"
    sp.style.opacity="0%"
    sp1.style.opacity="0%"
    fnl.style.opacity="0%"
    flask.style.opacity="0%"
    eflask.style.opacity="0%"
    machine.style.opacity="0%"
    dwater.style.opacity="0%"
    water.style.opacity="0%"
    //fflask.style.opacity="0%"
    oacrystal.style.opacity="0%"
    ecflask.style.visibility="visible"
    epipette.style.visibility="visible"
    abeaker.style.visibility="visible"
    epipette.style.transform="rotate(-90deg)"
    fpipette.style.transform="rotate(-90deg)"

    setTimeout(function(){
        pdish.style.visibility="hidden"
        reading.style.visibility="hidden"
        spatula.style.visibility="hidden"
        onbtn.style.visibility="hidden"
        tarebtn.style.visibility="hidden"
        sp.style.visibility="hidden"
        sp1.style.visibility="hidden"
        fnl.style.visibility="hidden"
        flask.style.visibility="hidden"
        eflask.style.visibility="hidden"
        machine.style.visibility="hidden"
        dwater.style.visibility="hidden"
        water.style.visibility="hidden"
        //fflask.style.visibility="hidden"
        oacrystal.style.visibility="hidden"
        ecflask.style.opacity="100%"
        epipette.style.opacity="100%"
        abeaker.style.opacity="100%"

        fflask.style.height="15%"
        fflask.style.width="6%"
        fflask.style.left="70%"
        fflask.style.top="60%"
        
        update()
        f=12
    },1000)
}
}

function visible(){
   
    pdish.style.visibility="visible"
    spatula.style.visibility="visible"
    onbtn.style.visibility="visible"
    tarebtn.style.visibility="visible"
    sp.style.visibility="visible"
    sp1.style.visibility="visible"
    fnl.style.visibility="visible"
    flask.style.visibility="visible"
    eflask.style.visibility="visible"
    dwater.style.visibility="visible"
    machine.style.visibility="visible"
    reading.style.opacity="100%"
    oacrystal.style.visibility="visible"
}

function on(){
    if(f==2){
        f=3
        reading.style.visibility="visible"
        update()
    }
}

function petridish(){
    if(f==3){
        f=555
        pdish.style.transform="translate(-420%,-200%)"
        setTimeout(function(){
            reading.innerText="0.50 gm"
            f=4
        },1000)
        update()
    }
    else if(f==7){
        f=568
        pdish.style.transform="translate(300%,-700%)"
        sp.style.transform="translate(1200%,-570%)"
        sp1.style.transform="translate(1230%,-570%)"
        reading.innerText="0.00 gm"
        setTimeout(function(){
            pdish.style.transform="translate(300%,-700%) rotate(45deg)"
            sp.style.transform="translate(1220%,-580%) rotate(45deg)"
            sp1.style.transform="translate(1250%,-520%) rotate(45deg)"
        },1500)
        setTimeout(function(){
            sp.style.transform="translate(1370%,-350%) rotate(45deg)"
            sp1.style.transform="translate(1370%,-350%) rotate(45deg)"
        },2500)
        setTimeout(function(){
            sp.style.transform="translate(1370%,0%) rotate(45deg)"
            sp1.style.transform="translate(1370%,0%) rotate(45deg)"
            flask.style.opacity="100%"
            eflask.style.opacity="0%"
            eflask.style.visibility="hidden"
        },3500)
        setTimeout(function(){
            pdish.style.transform="translate(200%,0%) rotate(0deg)"
            update()
        },4500)
        f=8
    }

}

function tare(){
    if(f==4){
        reading.innerText="0.00 gm"
        f=5
        update()
    }

}

function spatulamove(){
    if(f==5){
        f=789
        spatula.style.transform="translate(-260%,-90%)"
        setTimeout(function(){
            spatula.style.transform="translate(-570%,-120%)"
            sp.style.transform="translate(-700%,-80%)"
        },2000)
        setTimeout(function(){
            reading.innerText="0.33 gm"
        },3000)
        setTimeout(function(){
            spatula.style.transform="translate(-260%,-90%)"
        },5000)
        setTimeout(function(){
            spatula.style.transform="translate(-550%,-120%)"
            sp1.style.transform="translate(-680%,-80%)"
        },7000)
        setTimeout(function(){
            reading.innerText="0.63 gm"
        },8000)
        setTimeout(function(){
            spatula.style.transform="translate(-100%,0%)"
            f=6
            update()
         },9500)
    }
}

//ok()
function funnel(){
    if(f==6){
        f=500
        fnl.style.transform="translate(200%,-200%)  rotate(0deg)"
        setTimeout(function(){
            fnl.style.transform="translate(195%,-100%)"
            update()
            f=7
        },1500)
    }
}



function Dwater(){
    if(f==8){
        f=200
    water.style.transform = "translate(-10%,-20%) rotate(-50deg) " 
    setTimeout(() => {
        wdrop.style.visibility="visible"
        wdrop.style.transform = "translate(0%,300%) " 
        fflask.style.visibility = "visible"   
    },1000);
    setTimeout(function(){
        wdrop.style.opacity="0%"
        fflask.style.opacity = "100%"
        flask.style.opacity="0%"
        water.style.transform = "translate(0%,0%) rotate(0deg) " 
        update()
        f=9
    },2000)
    setTimeout(function(){
        fnl.style.transform="translate(200%,-200%)  rotate(0deg)"
        setTimeout(function(){
            fnl.style.transform="translate(75%,0%)  rotate(50deg)"
            flask.style.visibility="hidden"
            f=10
        },1000)
    },3500)
    }
}


function mix(){
    if(f==10){
        f=1000
        fflask.style.animation="tilt-n-move-shaking 0.4s"
        fflask.style.animationIterationCount="10"
        f=11
        setTimeout(update(),3000)
    }
}

/*ok()
f=11
ok()
fflask.style.visibility="visible"
fflask.style.opacity="100%"*/

function pipette(){
    if(f==13){
        f=899
        epipette.style.transform="translate(0%,-150%) rotate(0deg)"
        fpipette.style.transform="translate(0%,-150%) rotate(0deg)"
        setTimeout(function(){
            epipette.style.transform="translate(400%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(400%,-150%) rotate(0deg)"
        },1500)
        setTimeout(function(){
            epipette.style.transform="translate(400%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(400%,-50%) rotate(0deg)"
            fpipette.style.visibility="visible"
        },3000)
        setTimeout(function(){
            epipette.style.opacity="0%"
            fpipette.style.opacity="100%"
        },4500)
        setTimeout(function(){
            epipette.style.transform="translate(400%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(400%,-150%) rotate(0deg)"
        },6000)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-150%) rotate(0deg)"
        },7500)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-50%) rotate(0deg)"
            fcflask.style.visibility="visible"
        },9000)
        setTimeout(function(){
            epipette.style.opacity="100%"
            fpipette.style.opacity="0%"
            fcflask.style.opacity="100%"
            hcflask.style.opacity="0%"
        },10500)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-150%) rotate(0deg)"
        },12000)
        setTimeout(function(){
            epipette.style.transform="translate(0%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(0%,-150%) rotate(0deg)"
        },13500)
        setTimeout(function(){
            epipette.style.transform="translate(0%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(0%,-50%) rotate(0deg)"
        },15000)
        setTimeout(function(){
            epipette.style.transform="translate(0%,0%) rotate(-90deg)"
            fpipette.style.transform="translate(0%,0%) rotate(-90deg)"
            f=14
            update()
        },16500)
    }

    else if(f==12){
        f=888
        epipette.style.transform="translate(0%,-150%) rotate(0deg)"
        fpipette.style.transform="translate(0%,-150%) rotate(0deg)"
        setTimeout(function(){
            epipette.style.transform="translate(720%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(720%,-150%) rotate(0deg)"
        },1500)
        setTimeout(function(){
            epipette.style.transform="translate(720%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(720%,-50%) rotate(0deg)"
            fpipette.style.visibility="visible"
        },3000)
        setTimeout(function(){
            epipette.style.opacity="0%"
            fpipette.style.opacity="100%"
        },4500)
        setTimeout(function(){
            epipette.style.transform="translate(720%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(720%,-150%) rotate(0deg)"
        },6000)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-150%) rotate(0deg)"
        },7500)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-50%) rotate(0deg)"
            hcflask.style.visibility="visible"
        },9000)
        setTimeout(function(){
            epipette.style.opacity="100%"
            fpipette.style.opacity="0%"
            hcflask.style.opacity="100%"
            ecflask.style.opacity="0%"
        },10500)
        setTimeout(function(){
            epipette.style.transform="translate(-280%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(-280%,-150%) rotate(0deg)"
        },12000)
        setTimeout(function(){
            epipette.style.transform="translate(0%,-150%) rotate(0deg)"
            fpipette.style.transform="translate(0%,-150%) rotate(0deg)"
        },13500)
        setTimeout(function(){
            epipette.style.transform="translate(0%,-50%) rotate(0deg)"
            fpipette.style.transform="translate(0%,-50%) rotate(0deg)"
        },15000)
        setTimeout(function(){
            epipette.style.transform="translate(0%,0%) rotate(-90deg)"
            fpipette.style.transform="translate(0%,0%) rotate(-90deg)"
            fpipette.style.visibility="hidden"
            f=13
            update()
        },16500)
    }
}