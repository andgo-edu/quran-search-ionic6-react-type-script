import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useEffect } from "react";
import "./Search.css";
import { useState } from "react";
import { search } from "ionicons/icons";
import { url } from "inspector";

const Search = () => {

const [ userinput, setUserinput ] = useState([]);
//
const [datasearched, setDatasearched] = useState([]);





useEffect(()=>{
  //debug userinput
  console.log(userinput);
})





//debug
//console.log(setUserinput);







const searchApi= () =>{
postSearchedAPIData().then((data)=>{
  setDatasearched(data);

const stringifiedData = JSON.stringify(data);
console.log(stringifiedData);

})
    console.log("api searched");
  
  
  
  
  }

  
const stringDataDisplay = JSON.stringify([datasearched]);



  /** Button Search  */
  
  
  //1 async arrow function do a fetch request or a get request from the api
  //2 await 
  //3 Pass the object from api as Stringied JSON to show the results 

  // 4 Add function to onclick in button 
  //searchapi [x]
  //display the data []







async function postSearchedAPIData(
  url = `https://api.alquran.cloud/v1/search/${userinput}/all/en`
 ) {
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}







  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Search Page</IonTitle>
      </IonHeader>

      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonItem>
              <IonInput 
              placeholder="Search Api here" 
              onIonChange={(event:any)=> setUserinput(event.target.value!)}
              />
              <IonIcon icon={search} />
            
            <IonButton
            onClick={searchApi}
            >
              Search
            </IonButton>
            </IonItem>
<IonText>
  {[stringDataDisplay]}
</IonText>



          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default Search;
