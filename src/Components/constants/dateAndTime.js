export const currentDate=()=>{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Month is zero-based, so we add 1 to get the actual month
    let year = date.getFullYear();
    
    // Add leading zeros if needed
    day = day.toString().padStart(2, '0');
    month = month.toString().padStart(2, '0');
    
    // Concatenate the date parts to get the formatted date
    let dateOnly = `${year}-${month}-${day}`;
    
    return dateOnly
    
}


export const currentTime=()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Add leading zeros if needed
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    // Concatenate the time parts to get the 24-hour format
    let timeIn24HourFormat = `${hours}:${minutes}:${seconds}`;
    
    return timeIn24HourFormat
    
}