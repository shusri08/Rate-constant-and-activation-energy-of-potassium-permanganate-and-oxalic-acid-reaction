var next = document.querySelector("#next")
var ttube = document.querySelector("#ttube")
var tstand = document.querySelector("#tstand")
var ecflask = document.querySelector("#blank")
var p100 = document.querySelector("#potassium100")
var o100 = document.querySelector("#oxalic100ml")
var cstand = document.querySelector("#cstand")
var ulbath = document.querySelector("#ulbath")
var tmeter = document.querySelector("#tmeter")
var pipet = document.querySelector("#pipet")
var pipet10 = document.querySelector("#pipet10")
var flask10ml = document.querySelector("#flask10ml")
var drop = document.querySelector("#drop")
var flask20ml = document.querySelector("#flask20ml")
var pipetkmno4 = document.querySelector("#pipetkmno4")
var ttube2 = document.querySelector("#ttube2")
var tablesdiv = document.querySelector("#tablesdiv")
var table1 = document.querySelector("#table1")
var graph = document.querySelector("#graph")
var graphtext = document.querySelector("#graphtext")
var formula = document.querySelector("#formula")






var f = 0

var sample=0








function start1(){
    if (f==0){
        ulbath.style.visibility="hidden"
        cstand.style.visibility="hidden"
        tmeter.style.visibility="hidden"
        next.style.visibility="hidden"
        next.innerText="Next"
        resize()
        f=1
        // f=7
        sample=1
        // next.style.visibility="visible"
        // timer.style.animation="none"
    }
    else if (f==7){
        firsthide()
        f=8
    }
    else if(f==100){
        verify()
    }
    else if(f==10000){
        tablesdiv.style.visibility="visible"
        table1.style.visibility="visible"
        setTimeout(function(){
            next.innerText="Next"
            f=10001
        },5000)
    }
    else if(f==10001){
        table1.style.visibility="hidden"
        graph.style.visibility="visible"
        graphtext.style.visibility="visible"
        formula.style.visibility="visible"
        f=10002

    }



}


function resize(){
    o100.style.left="70%"
    p100.style.left="60%"
    pipet.style.left="45%"
    ecflask.style.left="40%"
    reading.style.visibility="hidden"
    values.style.opacity="0%"
    // pipet.style.visibility="visible"
    buttons2.style.visibility="hidden"
    // on10.style.animation="blinking"
    // on10.style.border="1px solid rgb(241, 253, 15)"
    // buttons.style.visibility="hidden"
    reading.style.visibility="hidden"
    // on.style.visibility="visible"
    timer1.style.visibility="hidden"
    timer1.style.opacity="0%"
    // ulbath.style.visibility="hidden"
    tmeter.style.opacity="100%"
    // tmeter.style.visibility="visible"
    tmeter20.style.visibility="hidden"
    tmeter20.style.opacity="0%"
    flaskchange.style.visibility="hidden"
    flaskchange.style.opacity="0%"
    pipet.style.visibility="visible"
    ecflask.style.visibility="visible"
    p100.style.visibility="visible"
    o100.style.visibility="visible"
    flask20ml.style.top="40%"
    flask20ml.style.left="40%"
    flask20ml.style.scale="1"
    flask20ml.style.width="7%"
    flask20ml.style.height="18%"
    reading.style.left="54.3%"
    reading.style.top="40.3%"
    reading.style.height="3.3%"
    reading.style.width="3%"
    values.style.fontSize="1.5rem"
    counter1()


}

function firsthide(){
    p100.style.visibility="hidden"
    o100.style.visibility="hidden"
    pipet.style.visibility="hidden"
    flask20ml.style.left="30%"
    ecflask.style.left="30%"
    ulbath.style.visibility="visible"
    ulbath.style.scale="1.4"
    ulbath.style.height="30%"
    ulbath.style.top="25%"
    oner = 1
    machinedivhide()

}

function resizemachine(){
    ulbath.style.scale="1"
    ulbath.style.top="32%"
    reading.style.left="57%"
    reading.style.top="47.1%"
    reading.style.height="2.6%"
    reading.style.width="2.3%"
    values.style.fontSize="1.2rem"
    buttons.style.visibility="hidden"
    cstand.style.visibility="visible"
    cstand.style.left="55%"
    cstand.style.top="-8%"
    cstand.style.height="71%"
    cstand.style.width="26%"
    tmeter.style.visibility="visible"
}

function pipet1(){
    if(sample==1){    
        simulation1st()
    } 
    
}




function simulation1st(){
    if (f==1){
        pipetresize()
        f=2
        pipet10.style.visibility="visible"
        pipet.style.transform="translate(0%,-840%) rotate(-90deg)"
        setTimeout(function(){
            pipet.style.transform="translate(170%,-840%) rotate(-90deg)"
            setTimeout(function(){
                pipet.style.transform="translate(170%,-500%) rotate(-90deg)"

                setTimeout(function(){
                    pipet10.style.opacity="100%"
                    pipet.style.opacity="0%"
                    setTimeout(function(){
                        pipet10.style.transform="translate(0%,-60%)"
                        pipet.style.transform="translate(170%,-840%) rotate(-90deg)"
                        setTimeout(function(){
                            pipet10.style.transform="translate(-1280%,-60%)"
                            pipet.style.transform="translate(-56%,-840%) rotate(-90deg)"
                            setTimeout(function(){
                                pipet10.style.transform="translate(-1280%,0%)"
                                pipet.style.transform="translate(-56%,-500%) rotate(-90deg)"
                                flask10ml.style.visibility="visible"
                                drop.style.visibility="visible"
                                setTimeout(function(){
                                    ecflask.style.visibility="hidden"
                                    drop.style.opacity="100%"
                                    flask10ml.style.opacity="100%"
                                    drop.style.transform="translate(0%,100%)"
                                    setTimeout(function(){
                                        drop.style.opacity="0%"
                                        pipet10.style.opacity="0%"
                                        pipet.style.opacity="100%"
                                        pipet10.style.visibility="hidden"
                                        f=3
                                    },500)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }

    else if (f==3){
        pipet10.style.visibility="visible"
        pipet.style.transform="translate(-55%,-840%) rotate(-90deg)"
        pipet10.style.transform="translate(-1280%,-60%)"
        f=4
        setTimeout(function(){
            pipet10.style.transform="translate(-500%,-60%)"
            pipet.style.transform="translate(170%,-840%) rotate(-90deg)"
            setTimeout(function(){
                pipet10.style.transform="translate(0%,0%)"
                pipet.style.transform="translate(170%,-500%) rotate(-90deg)"
            setTimeout(function(){
            pipet10.style.opacity="100%"
            pipet.style.opacity="0%"
            setTimeout(function(){
                pipet10.style.transform="translate(0%,-60%)"
                pipet.style.transform="translate(170%,-840%) rotate(-90deg)"
                setTimeout(function(){
                    pipet10.style.transform="translate(-1280%,-60%)"
                    pipet.style.transform="translate(-56%,-840%) rotate(-90deg)"
                    setTimeout(function(){
                        pipet10.style.transform="translate(-1280%,0%)"
                        pipet.style.transform="translate(-56%,-500%) rotate(-90deg)"
                        flask20ml.style.visibility="visible"
                        drop.style.visibility="visible"
                        setTimeout(function(){
                            flask10ml.style.visibility="hidden"
                            drop.style.opacity="100%"
                            flask20ml.style.opacity="100%"
                            drop.style.transform="translate(0%,100%)"
                            setTimeout(function(){
                                drop.style.opacity="0%"
                                pipet10.style.opacity="0%"
                                pipet.style.opacity="100%"
                                pipet10.style.visibility="hidden"
                                f=5
                            },500)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)

    },1000)
    },1000)
    }

    else if(f==5){
        pipetkmno4.style.visibility="visible"
        pipetkmno4.style.transform="translate(-430%,0%)"
        pipet.style.transform="translate(-55%,-840%) rotate(-90deg)"
        pipet10.style.transform="translate(-1280%,-60%)"
        f=6
        setTimeout(function(){
            pipet10.style.transform="translate(0%,-60%)"
            pipet.style.transform="translate(93%,-840%) rotate(-90deg)"
            setTimeout(function(){
                pipet10.style.transform="translate(0%,0%)"
                pipet.style.transform="translate(93%,-500%) rotate(-90deg)"
            setTimeout(function(){
            pipetkmno4.style.opacity="100%"
            pipet.style.opacity="0%"
            setTimeout(function(){
                pipetkmno4.style.transform="translate(-430%,-60%)"
                pipet.style.transform="translate(93%,-840%) rotate(-90deg)"
                setTimeout(function(){
                    pipetkmno4.style.transform="translate(-2020%,-110%)"
                    pipet.style.transform="translate(-187%,-1120%) rotate(-90deg)"
                    setTimeout(function(){
                        pipetkmno4.style.transform="translate(-2020%,-50%)"
                        pipet.style.transform="translate(-187%,-800%) rotate(-90deg)"
                        ttube2.style.visibility="visible"
                        drop.style.visibility="hidden"
                        setTimeout(function(){
                            ttube.style.visibility="hidden"
                            drop.style.opacity="100%"
                            ttube2.style.opacity="100%"
                            drop.style.transform="translate(0%,100%)"
                            setTimeout(function(){
                                drop.style.opacity="0%"
                                pipetkmno4.style.opacity="0%"
                                pipet.style.opacity="100%"
                                setTimeout(function(){
                                    pipet.style.transform="translate(-187%,-1120%) rotate(-90deg)"
                                    setTimeout(function(){
                                        pipet.style.transform="translate(0%,0%) rotate(0deg)"
                                        pipetkmno4.style.transform="translate(0%,0%)"
                                        pipetkmno4.style.visibility="hidden"
                                        f=7
                                        sample+=2
                                        next.style.visibility="visible"
                                    },1000)
                                },1000)
                            },500)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)

    },1000)
    },1000)
    }
}

function pipetresize(){
    flask20ml.style.visibility="hidden"
    flask10ml.style.opacity="0%"
    flask20ml.style.opacity="0%"
    ttube.style.visibility="visible"
    ttube2.style.opacity="0%"
    ttube2.style.visibility="hidden"
    ecflask.style.visibility="visible"
    ecflask.style.opacity="100%"
    
}