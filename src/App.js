import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';
function App() {
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function fetchCountries(){
      try {
        if(searchTerm == '') {
        let countryCardList = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
      countryCardList = await countryCardList.json();
      setCountryList(countryCardList)
      console.log(countryCardList);
        } 
      } catch (error) {
        console.error("Error fetching data: ",error);
      } 
      
    }
    fetchCountries();
    
    
  },[searchTerm]);

  useEffect(() => {
    const filteredCountries = countryList.filter((country) => {
      return country.common.toLowerCase().includes(searchTerm.toLowerCase());
    }
    );
    setCountryList(filteredCountries);
  }, [searchTerm]);

  const handleChangeCountryName = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='App'>
      <input type="text" placeholder='Search for countries...' onChange={handleChangeCountryName}/>
      <div className='countries'>
      {countryList.map((country) => {
        return <CountryCard img={country.png} name={country.common}/>
      })}
      </div>
     
    </div>
  );
}

export default App;