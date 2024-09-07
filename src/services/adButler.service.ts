export const findAds = async (locations: string[]) => {


  var lista:string[] = []

  locations.forEach((item)=>{
    console.log(getAdd(item))
  })

  console.log(lista);
  
};



const getAdd = (location:string)=>{
  let url=`https://servedbyadbutler.com/redirect.spark?MID=188096&plid=2579103&setID=774464&channelID=0&CID=0&banID=522391233&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=412e88de957dc2f95e09b5ab2010ca2ff5670be8&location=${location}`
  return url;
}
