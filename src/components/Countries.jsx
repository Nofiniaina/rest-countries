function Countries({ flag, name, population, region, capital }) {
    return (
        <div className="countries-box">
            <div className="countries-box-flag">
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div className="countries-box-info">
                <div className="countries-name">
                    <h3>{name}</h3>
                </div>
                <div className="countries-other">
                    <p><strong>Population:</strong> {population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>
                </div>
            </div>
        </div>
    );
}

export default Countries;