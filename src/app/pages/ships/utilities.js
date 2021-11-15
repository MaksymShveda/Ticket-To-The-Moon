export const timeSince=(date)=> {
    date = Date.parse(date)

    let seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      interval = Math.floor(interval);
     return interval === 1 ? interval + " year ago" : interval + " years ago"
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        interval = Math.floor(interval);
        return interval === 1 ? interval + " month ago" : interval + " months ago"
    }
    interval = seconds / 86400;
    if (interval > 1) {
        interval = Math.floor(interval);
        return interval === 1 ? interval + " day ago" : interval + " days ago"
    }
    interval = seconds / 3600;
    if (interval > 1) {
        interval = Math.floor(interval);
        
        return interval === 1 ? interval + " hour ago" : interval + " hours ago"
    }
    interval = seconds / 60;
    if (interval > 1) {
        interval = Math.floor(interval);
        return interval === 1 ? interval + " minute ago" : interval + " minutes ago"    
    }

    interval = Math.floor(interval);
        console.log(interval)
    if(interval === 0){
        return " just now"
    }
    return interval + " seconds ago";
  }