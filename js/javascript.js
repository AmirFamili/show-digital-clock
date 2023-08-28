$(document).ready(function () {

    function updateTime() {


        let clock = $('#clock');
        let date = $('#date');

        let d = new Date;
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let amPm = 'AM'



        if (hours > 12) {
            hours -= 12;
            amPm = 'PM';

        }
        clock.text(hours + ":" + minutes + ":" + seconds + " " + amPm);



        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let dayWeek=d.getDay();
        
        if(dayWeek==1){
            dayWeek="Monday"
        }else if(dayWeek==2){
            dayWeek="Teusday"
        }else if(dayWeek==3){
            dayWeek="Wensday"
        }else if(dayWeek==4){
            dayWeek="Thursday"
        }else if(dayWeek==5){
            dayWeek="Friday"
        }else if(dayWeek==6){
            dayWeek="Saturday"
        }else if(dayWeek==7){
            dayWeek="Sunday"
        }



        date.text(dayWeek+" "+month + "/" + day + "/" + year);

    }
    setInterval(updateTime, 1000);

});