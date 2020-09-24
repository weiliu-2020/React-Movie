const makeDate = () => {
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    return `${months[today.getMonth()]} ${today.getFullYear()}`;
}

export default makeDate;
