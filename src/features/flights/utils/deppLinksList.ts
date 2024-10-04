import { getKayakCountry } from '@/utils/kayakCountries';
//import * as deepLinksJson from './deepdeepLinksJson';
import {deepLinksJson} from './deepLinksJson';

export class LinkGenerator {

  constructor(){
    this.aId = '';
    this.enc_lid = '';
    this.type = '';
    this.origin = '';
    this.destination = '';
    this.formattedDate = '';
    this.formattedDate2 = '';
    this.cabinClass = '';
    this.adults = 0;
    this.childrenText = '';
    this.pValue = '';
    this.tripTypeCode = 1;
  }

  public aId? : string;
  public enc_lid? : string;
  public type? : string;
  public origin? : string;
  public destination? : string;
  public formattedDate? : string;
  public formattedDate2? : string;
  public cabinClass? : string;
  public adults? : number;
  public childrenText? : string;
  public pValue?:string;
  public tripTypeCode?: 1|2;
  

  public getLink(){
    return this.linkParser();
  }

  private linkParser(){
    let data:any[] = []
    deepLinksJson.available_links.forEach((item)=>{
      let domain;
      let linkToReplace;
 
      if(item.is_special){
        linkToReplace = deepLinksJson.special_link;
      }else{
        linkToReplace = deepLinksJson.base_link;
      }

      if(item.name == 'kayak'){
        domain = getKayakCountry();
      }else{
        domain = item.domain;
      }


      let replacedLink = linkToReplace
      .replace('*domain*',domain)
      .replace('*aId*',this.aId || '')
      .replace('*enc_lid*',this.enc_lid || '')
      .replace('*origin*',this.origin || '')
      .replace('*destination*',this.destination || '')
      .replace('*formattedDate*',this.formattedDate || '')
      .replace('*formattedDate2*',this.formattedDate2 || '')
      .replace('*cabinClass*',this.cabinClass || '')
      .replace('*adults*',this.adults?.toString() || '')
      .replace('*childrenText*',this.childrenText || '')
      .replace('*pValue*',this.pValue || '')
      .replace('*tripTypeCode*',this.pValue || '')

      let result =  item.adbutler_link + replacedLink;

      data.push({"name":item.name,"link":result});
    })
    console.log("DATA ===> ",data)
    return data;
  }


}

