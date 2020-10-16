    setInterval(setClock, 1000)

   const HourHand= document.querySelector('[data-hour-hand]');
    const MinuteHand = document.querySelector('[data-minute-hand]');
    const SecondHand = document.querySelector('[data-second-hand]');

    function settingClock(){
        const currentDate= new Date()
        // console.log(currentDate)
        const SecondRatio = currentDate.getSeconds()/60
        // console.log(secondRatio);
        const MinuteRatio = (SecondRatio + currentDate.getMinutes())/60;
        // console.log(MinuteRatio);
        const HourRatio = (MinuteRatio + currentDate.getHours())/12;
         setRotation(SecondHand, SecondRatio);
        setRotation(MinuteHand, MinuteRatio);
        setRotation(HourHand, HourRatio);
    }

    function setRotation(element, rotationRatio){
        element.style.setProperty("--rotation", rotationRatio * 360)
    }
    settingClock();
