export function addLinksToCompare(name,uri){
  
  if(uri.toLowerCase() == "foggyfly"){
   return adButlerDeepLinks[0].deepLink+uri
  }

  if(uri.toLowerCase() == "cheapoair"){
    return adButlerDeepLinks[0].deepLink+uri
  }

  return uri;

}



const adButlerDeepLinks = [
  {
    name:"foggyfly",
    deepLink: "https://servedbyadbutler.com/redirect.spark?MID=187841&plid=2609691&setID=757110&channelID=0&CID=0&banID=522434255&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=bff9d5daefc9582a1930ace0d710c1cf68a73fda&location="
  },
  {
    name:"cheapoair",
    deepLink: "https://servedbyadbutler.com/redirect.spark?MID=187841&plid=2609690&setID=757110&channelID=0&CID=0&banID=522434254&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=e470024ca63e7eb9dd857b684644cf585845e708&location="
  }

]
