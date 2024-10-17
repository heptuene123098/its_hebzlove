//  data
const data = {
    "Africa": {
        "North Africa": ["Algeria","Egypt","Libya", "Morocco", "Sudan", "Tunisia", "Mauritania"],
        "East Africa": ["Burundi", "Comoros", "Djibouti", "Eritrea", "Ethiopia", "Kenya", "Madagascar", "Malawi", "Mauritius", "Mozambique", "Rwanda", "Seychelles", "Somalia", "South Sudan", "Tanzania", "Uganda"],
        "West Africa": ["Benin", "Burkina Faso", "Cape Verde", "Ivory Coast", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Liberia", "Mali", "Niger", "Nigeria", "Senegal", "Sierra Leone", "Togo"],
        "Central Africa": ["Angola", "Cameroon", "Central African Republic", "Chad", "Republic of the Congo", "Democratic Republic of the Congo", "Equatorial Guinea", "Gabon", "São Tomé and Príncipe"],
        "Southern Africa": ["Botswana", "Eswatini (Swaziland)", "Lesotho", "Namibia", "South Africa", "Zimbabwe"]
    },
    "Antarctica": {
        "Antarctic Region": ["Antarctica"]           
    },
    "Asia": {
        "East Asia": ["China", "Hong Kong", "Japan", "Macao", "Mongolia", "North Korea", "South Korea"],
        "South Asia": ["Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Nepal", "Pakistan", "Sri Lanka"],
        "Southeast Asia": ["Brunei", "Burma", "Cambodia", "East Timor", "Indonesia", "Laos", "Malaysia", "Philippines", "Singapore", "Thailand", "Vietnam"],
        "Central Asia": ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan"],
        "Western Asia": ["Armenia", "Azerbaijan", "Bahrain", "Cyprus", "Georgia", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates", "Yemen"]
    },
    "Australia": {
        "Australia Region": ["Australia"],
        "New Guinea Island": ["Papua New Guinea"],
        "Oceania region": ["New Zealand"]
    },
    "Europe": {
        "Northern Europe": ["Denmark", "Estonia", "Finland", "Iceland", "Ireland", "Latvia", "Lithuania", "Norway", "Sweden", "United Kingdom"],
        "Southern Europe": ["Andorra", "Albania", "Andorra", "Bosnia and Herzegovina", "Croatia", "Cyprus", "Northern Cyprus", "Greece", "Italy", "Malta", "Monaco", "Montenegro", "San Marino", "Serbia", "Slovenia", "Spain", "Vatican City"],
        "Eastern Europe": ["Armenia", "Azerbaijan", "Belarus", "Bulgaria", "Czech Republic", "Georgia", "Hungary", "Moldova", "Poland", "Romania", "Russia", "Slovakia", "Ukraine", "Kosovo", "Transnistria", "South Ossetia", "Abkhazia"],
        "Western Europe": ["Austria", "Belgium", "France", "Germany", "Liechtenstein", "Luxembourg", "Monaco", "Netherlands", "Switzerland"]
    },
    "North America": {
        "North America": ["Canada", "United States", "Mexico", "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago"]
    },
    "South America": {
        "South America": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
    }
};

const locationSelect = document.getElementById('location');

// Function to extract all countries along with their region and continent, and sort them alphabetically
function getAllCountriesWithRegionsAndContinentsSorted(data) {
    let countryRegionContinentPairs = [];

    for (const [continent, regions] of Object.entries(data)) {
        for (const [region, countries] of Object.entries(regions)) {
            countries.forEach(country => {
                countryRegionContinentPairs.push({ country, region, continent });
            });
        }
    }

    // Sort by country name
    countryRegionContinentPairs.sort((a, b) => a.country.localeCompare(b.country));

    return countryRegionContinentPairs;
}

// Function to populate dropdown
function populateOptions(options) {
    locationSelect.innerHTML = '<option value="">Select Location</option>';
    
    options.forEach(pair => {
        locationSelect.innerHTML += `<option value="${pair.country}">${pair.country} (${pair.region}, ${pair.continent})</option>`;
    });
}

const sortedCountriesWithRegionsAndContinents = getAllCountriesWithRegionsAndContinentsSorted(data);
populateOptions(sortedCountriesWithRegionsAndContinents);

