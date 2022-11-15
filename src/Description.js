// DO NOT DELETE
import * as React from 'react'
import {useState , useEffect} from 'react'
import {DogImage} from './DogImage.js'

function fetchDogImg(){
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>{
        if(!response.ok){
          return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
        }else{
          return response.json();
        }
      }
    );
}


function Description(){
    const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-sussex/n02102480_3771.jpg");
    return (
        <div>
            <div class="discription">
                <p>犬の画像を表示するサイトです</p>
            </div>
            <button onClick={() => {fetchDogImg().then(json => setDogUrl(json.message))}}>画像変更</button>
            <DogImage url={dogUrl}/>
        </div> 
    )
}
export { Description }