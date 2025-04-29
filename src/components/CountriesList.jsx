import Countries from "./Countries";
import data from "../data/data.json";

function CountriesList() {

    return (
        <div className="countries-list">
            {
                data.map((country) => (
                    <Countries
                        key={country.name}
                        flag={country.flags.svg}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                ))
            }
        </div>
    );
}

export default CountriesList;