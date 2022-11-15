// DO NOT DELETE
import * as React from 'react'
import { useState,useEffect } from 'react'

function DogListContainer(){
  const [breeds,setBreeds] = useState();

  useEffect(()=>{
    fetchDogBreeds()
    .then(json => setBreeds(json.message));
  },[]);

  function fetchDogBreeds(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response=>{
      if(!response.ok){
        return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
      }else{
        return response.json();
      }
    }
    );
  }
}

export { DogListContainer }