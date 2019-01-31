import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idv',
  templateUrl: './idv.component.html',
  styleUrls: ['./idv.component.scss']
})
export class IdvComponent implements OnInit {
  hasChildren : boolean =  false;
  collapsed : boolean = false;
  idvRadioBtn = [{id: 1, value:"PrivatelyOwned",data:"Privately owned"},{id: 2, value:"PubliclyQuoted",data:"Publicly Quoted"},{id: 3, value:"GovernmentOwned",data:"Government owned"}];
  tableentity = [];
  lst = [];
  
  
  subEntity = [];  
    entitytypeValue ="";
    entityValue = "";
    entityradioValue = [];
    idvvalue1 = "";
    idvvalue2 = "";
    idvvalue3  = "";
    idvstep1tableFlag = false;
    EntityFlag = true;
    subclientvalue = "";
  constructor(){}

  isHidden(){}

  ngOnInit(){}

  titleName="Entity Configuration";
  
    /*databinding-reference*/
  
    
    idvValue=function(data){
    if(data.length != 0){
      this.idvRadioBtn.push({id: this.idvRadioBtn.length + 1, value: data, data: data });
      this.idvvalue1 = "";}
    }
    removeinputtext = function(index){
      this.idvRadioBtn.splice(index,1);
      
    }
    removeinputtext1 = function(index){
      this.entityradioValue.splice(index,1);
      
    }
   removeinputtext2 = function(index){
      this.subEntity.splice(index,1);
      
    }
      /*end of reference*/
      
    /* this.idvRadioBtn1 = [{id: 1, value:"Private Company",data:"Private Company"},{id: 2, value:"Partnership",data:"Partnership"},{id: 3, value:"Un Incorporated Business",data:"Un Incorporated Business"}]; */
    
    idvValue1=function(data){ 
    if(data.length != 0){
      this.entityradioValue.push({id: this.entityradioValue.length + 1, name: data, type: data });
      this.idvvalue2 = "";}
    }
    
    /* this.idvcheck = [{id: 1, value:"Swee",data:"Swee"},{id: 2, value:"MajorityOwneredBySwee",data:"Majority ownered by swee"},{id: 3, value:"Regulated FI",data:"Regulated FI"}]; */
    
    idvValue2=function(data){
    if(data.length != 0){
      this.subEntity.push({id: this.subEntity.length + 1, name: data, type: data });
      this.idvvalue3 = "";
    }
    }
    
    idvredirect=function(data){
      localStorage.Shipvalue = data.name;
      localStorage.entityval = data.value;
      localStorage.Subentityval = data.value2;
     // $location.path('/Idv/Step3');
      
    }
    
    

    dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
  ownershipFn = function(data){ 
      this.EntityFlag = true;
      this.SubClientFlag = false;
      
      localStorage.ownershipFlag = data;
  
      if(data == "PrivatelyOwned"){
    this.entityradioValue = [{id: 1,name:"Private Company", type: "PrivateCompany"},{id: 2,name:"Partnership", type: "Partnership"},{id: 3,name:"Un Incorporated Business",type: "UnIncorporatedBusiness"}];	
      }
      else if(data == "PubliclyQuoted"){ 
      this.entityradioValue = [{id:1,name:"On Recognised SE",type: "OnRecognisedSE"},{id:2,name:"Not on Recognised SE",type: "NotOnRecognisedSE"}];	
      }
      else if(data == "GovernmentOwned"){  
      this.entityradioValue = [{id: 1,name:"Government", type: "Government"},{id: 2,name:"Public Sector Bodies",type: "PublicSectorBodies"},{id: 3,name:"Statutory Corporations", type: "StatutoryCorporations"},{id: 4,name:"State Owned Corporations",type: "StateOwnedCorporations"},{id: 5,name:"Central Banks",type: "CentralBanks"},{id: 6,name:"Supra Nationals and Dev Org",type: "SupraNationals"}];	
      }
    }

    entityFn = function(data){
          this.SubClientFlag = true;
          localStorage.entityFlag = data;
          if(data == "PrivateCompany"){
          this.subEntity = [{id: 1,name:"Regulated FI",value: "RegulatedFI"},{id: 2,name:"Established Entity",value: "EstablishedEntity"},{id: 3,name:"Correspondent Bank",value: "CorrespondentBank"},{id: 4,name:"Money Service Bureau",value: "MoneyServiceBureau"},{id:5,name:"Trust/ Foundations", value: "TrustFoundations"},{id: 6,name:"NGO/ Charities / Places of Worship", value: "NGO"},{id: 7,name:"Clubs and Societies",value: "ClubsAndSocieties"},{id: 8,name:"Other Private Companies",value: "OtherPrivateCompanies"}];	
          }else if(data == "Partnership"){
          this.subEntity = [{id: 1,name:"Established Entity",value: "EstablishedEntity"},{id: 3,name:"Other Partnerships", value: "OtherPartnerships"}];	
          }else if(data == "UnIncorporatedBusiness"){
          this.subEntity = [{id: 1,name:"Established Entity",value: "EstablishedEntity"},{id: 2,name:"Trust / Foundations", value: "TrustFoundations"},{id: 3,name:"NGO/ Charities / Places of Worship", "value": "NGOCharitiesPlacesOfWorship"},{id: 4,name:"Clubs and Societies",value: "ClubsAndSocieties"},{id: 5,name:"Other Un Inc Business",value: "UnIncBusiness"}];	
          }else if(data == "OnRecognisedSE"){
          this.subEntity = [{id: 1,name:"Regulated FI",value: "RegulatedFI"},{id: 2,name:"Correspondent Bank",value: "CorrespondentBank"},{id: 3,name:"Money Service Bureau", value: "MoneyServiceBureau"},{id: 4,name:"Trusts / Foundations",value: "TrustsFoundations"},{id: 5,name:"Widely Held (>50% held with Public)", value: "50HeldWithPublic"},{id: 6,name:"Not Widely held (< 50% held with Public)", value: "50HeldWithPublic"}];	
          }else if(data == "NotOnRecognisedSE"){
          this.subEntity = [{id: 1,name:"Regulated FI", value: "RegulatedFI"},{id: 2,name:"Correspondent Bank", value: "CorrespondentBank"},{id: 3,name:"Money Service Bureau", value: "MoneyServiceBureau"},{id: 4,name:"Trusts / Foundations", value: "TrustsFoundations"},{id: 5,name:"Publicly Quoted", value: "PubliclyQuoted"}];	
          }else if(data == "Government"){
          this.subEntity = [{id: 1,name:"Gov Ministries / Dept / Agencies", value: "GovMinistriesDeptAgencies"}];	
          }else if(data == "PublicSectorBodies"){
          this.subEntity = [{id: 1,name:"Public Sector Bodies", value: "PublicSectorBodies"}];	
          }else if(data == "StatutoryCorporations"){
          this.subEntity = [{id: 1,name:"Correspondent Bank", value: "CorrespondentBank"},{id: 2,name:"Money Service Bureau", value: "MoneyServiceBureau"},{id: 3,name:"Trust / Foundations", value: "TrustFoundations"},{id: 4,name:"Regulated FI",value: "RegulatedFI"},{id: 5,name:"Other Statutory Corporations",value: "OtherStatutoryCorporations"}];	
          }else if(data == "StateOwnedCorporations"){
          this.subEntity = [{id: 1,name:"Correspondent Bank",value: "CorrespondentBank"},{id: 2,name:"Trust / Foundations", value: "TrustFoundations"},{id: 3,name:"Other State owned Corporations",value: "OtherStateOwnedCorporations"}];	
          }else if(data == "CentralBanks"){
          this.subEntity = [{id: 1,name:"Central Banks", value: "CentralBanks"}];	
          }else if(data == "SupraNationals"){
          this.subEntity = [{id: 1,name:"Supra Nationals and Dev Org", value: "SupraNationals"}];	
          }	
      }
    	//this.tableentity = [];
      subEntityFn = function(data,data1,data2){ 
        console.log(arguments)
          this.idvstep1tableFlag = true;
          // this.value1 = localStorage.Shipvalue;
          // this.value2 = localStorage.entityval;
          // this.value3 = localStorage.Subentityval;
          for(var i in this.lst){
            var index=this.tableentity.length + 1;
            var status;
            if(index==1){
              status="Completed"
            }
            else if(index==2){
              status="WIP"			
            }
            else if(index==3){
              status="Configured"
            }
            else{
              status="Configured"
            }
          this.tableentity.push({id: this.tableentity.length + 1,name:data,value:data1,value2:this.lst[i],status:status}); 
        //  $location.hash('idv-panel1');
          }
          setTimeout(function(){
          this.lst = [];
          },1000);
      }
      riskRatingFn = function(data){
        localStorage.riskRatingFlag = data;
        
        }
        
        selected = [];
      
     toggle = function (item, list) {
          var idx = list.indexOf(item);
          if (idx > -1) {
          list.splice(idx, 1);
          }
          else {
          list.push(item);
          }
      };
    //  var k = 0;
     exists = function (item, list) {
     this.subentityArr = [];
      for(let k in list){
     this.subentityArr.push(list[k].name);
      }
      return list.indexOf(item) > -1;
      };
     
       change = function(check,value){
              if(check){
                 this.lst.push(value);
              }else{
                  this.lst.splice(this.lst.indexOf(value), 1);
              }
        };
       currentNavItem = 'page1';
        
        customerFlag = false;
        IndiBenificialFlag = false;
        NonIndiBenificialFlag = false;
        controllerFlag = false;
        navFn = function(data){
            if(data == "customer"){
                this.customerFlag = true;
                this.IndiBenificialFlag = false;
                this.NonIndiBenificialFlag = false;
                this.controllerFlag = false;	
            }else if(data == "Individual"){
                this.customerFlag = false;
                this.IndiBenificialFlag = true;
                this.NonIndiBenificialFlag = false;
                this.controllerFlag = false;	
            }else if(data == "nonIndividual"){
                this.customerFlag = false;
                this.IndiBenificialFlag = false;
                this.NonIndiBenificialFlag = true;
                this.controllerFlag = false;	
            }else if(data == "controller"){
                this.customerFlag = false;
                this.IndiBenificialFlag = false;
                this.NonIndiBenificialFlag = false;
                this.controllerFlag = true;	
            }
        }


}
