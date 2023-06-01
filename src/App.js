import React, {useState} from "react";

const App = () => {
    const [user_latitude, setUserLatitude] = useState(0);
    const [user_longitude, setUserLongitude] = useState(0);
    const [hemisphere, setHemisphere] = useState("");
    const [month, setMonth] = useState("");

    function getLocation(){
         if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) =>{
                        setUserLatitude(position.coords.latitude);
                        setUserLongitude(position.coords.longitude);
                        console.log("Hello")
                        if(position.coords.latitude>0){
                            setHemisphere(value => "Northern Hemisphere");
                        }
                        else if(position.coords.latitude<0){
                            setHemisphere(value => "Southern Hemisphere");
                        }
                        else{
                            setHemisphere(value => "Equator");
                        }
                    }
                );
         }
        let all_months =  ["January","February","March","April","May","June","July","August","September","October","November","December"]
        let date = new Date();
        setMonth( all_months[date.getMonth()])

    }
    
    return(
        <div>
            <h1>React Geolocation</h1>
            <p>Latitude: {user_latitude}</p>
            <p>Longitude: {user_longitude}</p>
            <p>{hemisphere}</p>
            <p>{month}</p>
            <button onClick={getLocation}>Get Location</button>
        </div>
    )
}

export default App;


// function hello(e){
//     e.preventDefault();

// }