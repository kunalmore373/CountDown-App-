
const endDate = new Date( "23 JUN , 2025 00:00:00").getTime() ;
const startDate = new Date("18 JUN , 2025 00:00:00").getTime() ;

setInterval( function updateTime(){
    const currentDate = new Date().getTime() ;

    const distanceCovered = currentDate - startDate ;
    const distancePending = endDate - currentDate ;

    const oneDayInMillis = ( 24*60*60*1000 ) ;
    const oneHourInMillis = ( 60*60*1000 ) ;
    const oneMinInMillis = ( 60*1000 ) ;
    
    const days = Math.floor ( distancePending / oneDayInMillis ) ;
    const hr = Math.floor ( (distancePending%(oneDayInMillis)) / (oneHourInMillis)) ;
    const mins = Math.floor ( (distancePending % oneHourInMillis) / oneMinInMillis ) ;
    const sec = Math.floor ( (distancePending % oneMinInMillis) / 1000 );

    const getDays = document.getElementById ("days") ;
    const getHour = document.getElementById ("hour") ;
    const getMin = document.getElementById ("minutes") ; 
    const getSec = document.getElementById ("second") ;
    getDays.innerHTML = days ;
    getHour.innerHTML = hr ;
    getMin.innerHTML = mins ;
    getSec.innerHTML = sec ;

    //PROGRESS BAR 
    const totalDistance = endDate - startDate ;
    const progressBar = (( distanceCovered ) / ( totalDistance ))*100 ;
    document.getElementById ("progress-bar").style.width = progressBar +"%" ;

    if ( distancePending <= 0 ){
        clearInterval(x) ;
        document.getElementById ("progress-bar").style.width = "100%" ;
        document.querySelector (".countdown").innerHTML = "EXPIRED!!" ;
        alert("The Time is been Expired!!") ;
    }
    
} , 1000 ) ;