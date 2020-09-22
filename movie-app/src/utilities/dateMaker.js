
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const setDate = () => {
    // let strDate = obj.date.split(' ')[0] + 'Z';
    let date = new Date();
    let monthName = months[date.getMonth()];
    let yearName = date.getFullYear();
    let dayNumber = date.getDate();
    return `${monthName} ${dayNumber}, ${yearName}`;
}


export default setDate;
