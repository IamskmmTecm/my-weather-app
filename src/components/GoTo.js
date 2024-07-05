import React, { useEffect, useState } from "react"
import WeatherBox from "./WeatherBox"

export default function GoTo() {

    const [value, setValue] = useState('')
    const [value1, setValue1] = useState({ lat: 0, lon: 0 })
    const [arrmap, setArrmap] = useState([])
    const [weather, setWeather] = useState({
        temp: 0,
        feelslike: 0,
        maxTemp: 0,
        minTemp: 0
    })

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${value1.lat}&lon=${value1.lon}&appid=1d13ce9ad6d71637b38a1dfe97a0c3ab`)
            .then(weatherPromis => weatherPromis.json())
            .then(weatherJson => setWeather({ temp: weatherJson.main.temp, feelslike: weatherJson.main.feels_like, maxTemp: weatherJson.main.temp_max, minTemp: weatherJson.main.temp_min }))
    }, [value1])

    const position = async (arr) => {
        const locations = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${arr}&limit=5&appid=1d13ce9ad6d71637b38a1dfe97a0c3ab`)
        const res = await locations.json();
        return res.map((arr) => {
            console.log(arr)
            return (
                {
                    value: {
                        lat: arr.lat,
                        lon: arr.lon
                    },
                    label: `${arr.name},${arr.country}`
                }
            )
        })
    }

    const onClick = () => {

        console.log("onclick starts ...")
        position(value).then(res => setArrmap(res))
    }

    const onSelect = (e) => {
        arrmap.map(i => {
            if (i.label == e.target.value) {
                setValue1({ lat: i.value.lat, lon: i.value.lon })
            }
        })
    }

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => onClick()}>Click here</button>
            <select onClick={(e) => onSelect(e)}>
                {arrmap.map(i => <option>{i.label}</option>)}
            </select>
            <div style={{ position: 'absolute', top: '43%', left: '38%' }}>
                <WeatherBox prop={weather} />
            </div>
        </>

    )
}
