export function addEventListeners (target, eventType, triggerFunction) {
    target.addEventListener(eventType, triggerFunction);
};

export function getTodaysDate () {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;

    return today;
};

