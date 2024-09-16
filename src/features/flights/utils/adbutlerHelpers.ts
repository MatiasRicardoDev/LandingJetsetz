
const cheapoair = "https://servedbyadbutler.com/redirect.spark?MID=188096&plid=2588412&setID=774464&channelID=0&CID=0&banID=522405292&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=9b1f6ecc278feb84f5a6c261909a3d8340ed2569&location=";

const eDreams = "https://servedbyadbutler.com/redirect.spark?MID=188096&plid=2588414&setID=774464&channelID=0&CID=0&banID=522405296&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=bb08e224b0ed5edc3710b6f769a2cf968a7b74bc&location=";

export const parseClickLink = (name:string,link:string)=>{
    if(name = "eDreams"){
        return eDreams+link;
    }else if(name = "Cheapoair"){
        return cheapoair+link;
    }else{
        return link;
    }
}

export const addClickLink = (items:any[])=>{
    let result:any[] = [];
    items.forEach(item => {
        item.deepLink = parseClickLink(item.name,item.deepLink)
        result.push(item);
    });

    return result;

}



