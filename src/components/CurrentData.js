import React, { useEffect, useState } from "react";
import WeatherBox from "./WeatherBox";

export default function CurrentData() {

    const [weather, setWeather] = useState({
        temp: 0,
        feelslike: 0,
        maxTemp: 0,
        minTemp: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            console.log(pos);
            let weatherPromis = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=1d13ce9ad6d71637b38a1dfe97a0c3ab`)
            let weatherJson = await weatherPromis.json();
            setWeather({ temp: weatherJson.main.temp, feelslike: weatherJson.main.feels_like, maxTemp: weatherJson.main.temp_max, minTemp: weatherJson.main.temp_min })
        });
    }, []
    );

    return (
        <React.Fragment>
            <WeatherBox prop={weather} />
        </React.Fragment >
    )
}