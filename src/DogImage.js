// DO NOT DELETE
import * as React from 'react'

function DogImage(props){
    return (
        <div class="dogimg">
            <img src={props.url} alt="dogimage"/>
        </div>
    );
}

export {DogImage}