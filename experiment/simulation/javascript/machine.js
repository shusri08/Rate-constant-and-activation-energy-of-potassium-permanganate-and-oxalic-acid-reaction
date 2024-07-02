var on = document.querySelector("#on")
var plus1 = document.querySelector("#plus1")
var minus1 = document.querySelector("#minus1")
var values = document.querySelector("#values")
var machinedv = document.querySelector("#machineoperator")
var popup = document.querySelector("#popup")
var buttons = document.querySelector("#buttons")
var tmeter20 = document.querySelector("#tmeter20")
var buttons2 = document.querySelector("#buttons2")
var on10 = document.querySelector("#on10")
var timer1 = document.querySelector("#time")
var flaskmix = document.querySelector("#flaskmix")
var flaskchange = document.querySelector("#flaskchange")


// var updator = values.innerText
var oner = 0
var temptmeter
var trial = "0st"
var ttemp = 20
// var timer = "none"





function on1(){
    if(oner==1){
        values.style.opacity="100%"
        oner=2
        // on.style.animation="none"
        on.style.border="none"
        // on.style.visibility="hidden"
    }
}

function plus2(){
    if(oner==2){
        if(parseInt(values.innerText)<100){
            values.innerText = parseInt(values.innerText)+10
            f=100
        
        }
    }
}

function minus2(){
    if(oner==2){
        if(parseInt(values.innerText)>0){
            values.innerText = parseInt(values.innerText)-10
            f=100
        }
    }
}

function verify(){
    if(oner==2){
        if(parseInt(values.innerText)==ttemp){
            oner=100
            f=200
            resizemachine()
            next.style.visibility="hidden"
            temptmeter=tmeter20
            on.style.border="1px solid rgb(241, 253, 15)"
            buttons.style.visibility="hidden"
        }
        else{
            popup.style.visibility="visible"
            popuphider()
            
        }
    }
    
}

function popuphider(){
        setTimeout(function(){
            popup.style.visibility="hidden"
            ptext.innerText="You selected temperature 'more/less' than required <br>Please select right temperature"
        },5000)
}

function machinedivhide(){
    buttons.style.visibility="visible"
    reading.style.visibility="visible"
}

function thermometer(){
    if(f==200){
        tmeter.style.rotate="-90deg"
        tmeter.style.top="15%"
        tmeter20.style.visibility="visible"
        setTimeout(function(){
            tmeter.style.left="57.2%"
            tmeter.style.top="18%"
            setTimeout(function(){
                temptmeter.style.opacity="100%"
                tmeter.style.opacity="0%"
                f=201
                setTimeout(function(){
                    tmeter.style.visibility="hidden"
                    tmeter.style.top="59%"
                    tmeter.style.left="17%"
                    tmeter.style.rotate="0deg"
                },1000)
            },5000)

        },1000)
    }
}

function testtube(){
        if(f==201){
            f=202
            ttube2.style.top="-2%"
            ttube.style.top="-2%"
            setTimeout(function(){
                ttube2.style.left="58.5%"
                ttube.style.left="58.5%"
                setTimeout(function(){
                    ttube2.style.top="2%"
                    ttube.style.top="2%"
                    f=203
                },1000)    
            },1000)
        }
        if(f==206){
            // stopBtn()
            resetBtn()
            f=207
            ttube2.style.top="-2%"
            ttube.style.top="-2%"
            setTimeout(function(){
                ttube2.style.left="49.5%"
                ttube.style.left="49.5%"  
                setTimeout(function(){
                    ttube2.style.rotate="100deg"
                    ttube2.style.top="-6%"
                    ttube.style.rotate="100deg"
                    ttube.style.top="-6%"
                    flaskmix.style.visibility="visible"
                    setTimeout(function(){
                        ttube.style.visibility="visible"
                        ttube2.style.opacity="0%"
                        ttube.style.opacity="100%"
                        flask20ml.style.opacity="0%"
                        flaskmix.style.opacity="100%"
                        setTimeout(function(){
                            ttube2.style.visibility="hidden"
                            flask20ml.style.visibility="hidden"
                            ttube.style.rotate="0deg"
                            ttube.style.top="-2%"
                            ttube.style.left="22%"
                            ttube2.style.rotate="0deg"
                            ttube2.style.top="-2%"
                            ttube2.style.left="22%"
                            setTimeout(function(){
                                ttube.style.top="18.6%"
                                ttube2.style.top="18.6%"
                                setTimeout(function(){
                                    // startBtn()
                                    flaskmix.style.animation="mix"
                                    flaskmix.style.animationDuration="0.3s"
                                    flaskmix.style.animationIterationCount="infinite"
                                    startBtn()
                                    colourchanger()
                                },1000)
                                f=208
                            },1000)
                        },500)
                    },1000)
                },1000)
            },1000)

        }
}

function flask20mlwala(){
    if(f==203){
        f=204
        flask20ml.style.top="16%"
        setTimeout(function(){
            flask20ml.style.left="59%"
            flask20ml.style.scale="0.9"
            flask20ml.style.width="5.5%"
            flask20ml.style.height="19%"
            setTimeout(function(){
                flask20ml.style.top="17%"
                buttons2.style.visibility="visible"
                timer1.style.visibility="visible"
                oner=101
                resetBtn()
                f=205
            },1000)
        },1000)
    }
}




function on110(){
    if(oner==101){

        timer1.style.opacity="100%"
        // on10.style.animation="none"
        buttons2.style.visibility="hidden"
        // on10.style.border="none"
        setTimeout(function(){
            startBtn()
            setTimeout(function(){
                f=206
                stopBtn()
                ptext.innerText="Waiting time is over now"
                setTimeout(function(){
                    popup.style.visibility="visible"
                    popuphider()
                },500)
            },305000)
        },1000)
        oner=102


        // f=206
    }
}

function colourchanger(){
    flaskchange.style.visibility="visible"
    flaskchange.style.animation="mix"
    if(trial=="0st"){
        setTimeout(function(){
            stopBtn()
            ptext.innerText="The transformation of the mixture was complete after 140 seconds"
            popup.style.visibility="visible"
            popuphider()
            trial="1st"
            f=0
            next.style.visibility="visible"
            next.innerText="Repeat"
            flaskmix.style.visibility="hidden"
            flaskmix.style.animation="none"
        },140000)
        setTimeout(function(){
            flaskchange.style.opacity="100%"
            flaskmix.style.opacity="0%"
        },139000)
    }
    else if(trial=="1st"){
        setTimeout(function(){
            stopBtn()
            ptext.innerText="The transformation of the mixture was complete after 92 seconds"
            popup.style.visibility="visible"
            popuphider()
            trial="2st"
            f=0
            next.style.visibility="visible"
            next.innerText="Repeat"
            flaskmix.style.visibility="hidden"
            flaskmix.style.animation="none"
            
        },92000)
        setTimeout(function(){
            flaskchange.style.opacity="100%"
            flaskmix.style.opacity="0%"
        },91000)
    }
    else if(trial=="2st"){
        setTimeout(function(){
            stopBtn()
            ptext.innerText="The transformation of the mixture was complete after 40 seconds"
            popup.style.visibility="visible"
            popuphider()
            trial="3st"
            f=0
            next.style.visibility="visible"
            next.innerText="Repeat"
            flaskmix.style.visibility="hidden"
            flaskmix.style.animation="none"
        },40000)
        setTimeout(function(){
            flaskchange.style.opacity="100%"
            flaskmix.style.opacity="0%"
        },39000)
    }
    else if(trial=="3st"){
        setTimeout(function(){
            stopBtn()
            ptext.innerText="The transformation of the mixture was complete after 25 seconds"
            popup.style.visibility="visible"
            popuphider()
            trial="4st"
            f=0
            next.style.visibility="visible"
            next.innerText="Repeat"
            flaskmix.style.visibility="hidden"
            flaskmix.style.animation="none"
        },25000)
        setTimeout(function(){
            flaskchange.style.opacity="100%"
            flaskmix.style.opacity="0%"
        },24000)
    }
    else if(trial=="4st"){
        setTimeout(function(){
            stopBtn()
            ptext.innerText="The transformation of the mixture was complete after 9 seconds"
            popup.style.visibility="visible"
            popuphider()
            trial="5st"
            f=10000
            next.style.visibility="visible"
            next.innerText="Observations"
            flaskmix.style.visibility="hidden"
            flaskmix.style.animation="none"
        },9000)
        setTimeout(function(){
            flaskchange.style.opacity="100%"
            flaskmix.style.opacity="0%"
        },8000)
    }

    
}



function counter1(){
    if(trial=="1st"){
        tmeter20.src="img/30Thermometerorg.png"
        ttemp=30
    }
    else if(trial=="2st"){
        tmeter20.src="img/40Thermometerorg.png"
        ttemp=40
    }
    else if(trial=="3st"){
        tmeter20.src="img/50Thermometerorg.png"
        ttemp=50
    }
    else if(trial=="4st"){
        tmeter20.src="img/60Thermometerorg.png"
        ttemp=60
    }
}