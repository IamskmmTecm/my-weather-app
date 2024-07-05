const WeatherBox = (prop) => {

    const outerStyle = {
        minHeight: '150px',
        minWidth: '350px',
        border: '1px solid black',
        backgroundColor: 'transperant',
        boxShadow: '5px 5px 5px lightblue',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        padding: '5px',
        backdropFilter: `blur(10px)`
    };

    return (
        <div style={outerStyle}>
            <h2 style={{ fontSize: '30px', textAlign: 'center', marginBottom: '12px' }}>{Math.round(prop.prop.temp - 273.15)}°C</h2><br />
            <div style={{ textAlign: "right" }}>
                <span>{Math.round(prop.prop.minTemp - 273.15)}°C/{Math.round(prop.prop.maxTemp - 273.15)}°C </span>
            </div>
            <div style={{ margin: '5px' }}>
                <span style={{ fontSize: '20px', marginRight: '10px' }}>  Feels like {Math.round(prop.prop.feelslike - 273.15)}°C</span>
            </div>
        </div>
    )

}
export default WeatherBox;