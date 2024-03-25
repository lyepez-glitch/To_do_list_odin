const timestamp = Date.now();


const currentDate = new Date(timestamp);


const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const date = format(new Date(month, day, year), "MM/dd/yyyy");
export default date;