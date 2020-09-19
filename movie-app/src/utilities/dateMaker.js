



function setDate(obj){
    let strDate = obj.date.split(' ')[0] + 'Z';
    let date = new Date(strDate);
    let monthName = months[date.getMonth()];
    let yearName = years[date.getFullYear()];
    let dayNumber = date.getDate();
    obj.date = `${yearName} ${monthName} ${dayNumber}`;
}

export default setDate;