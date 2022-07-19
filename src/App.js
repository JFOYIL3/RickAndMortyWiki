import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import { Filters } from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';


function App() {

  let [pageNumber, setPageNumber] = useState(1); // default page number is 1
  let [search, setSearch] = useState(""); // default search is ""
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  

  // store the api link
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  // load up the data
  // runs whenever page number changes
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })();
  },[api]); // watch on api

  return (
    <div className="App">
      <Navbar />
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
           <Filters 
            setGender={setGender} 
            setStatus={setStatus} 
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
