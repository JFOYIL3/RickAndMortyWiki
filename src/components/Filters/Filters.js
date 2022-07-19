import React from 'react';
import Gender from '../Filters/Category/Gender';
import Species from '../Filters/Category/Species';
import Status from '../Filters/Category/Status';

export const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {


  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");

    // this will reload the page
    // Question: ^then we don't need
    // the other functions up above then right??
    window.location.reload(false);
  };
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div 
        onClick={clear}
        style={{cursor: "pointer"}} 
        className='text-center text-primary text-decoration-underline mb-4'
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
      </div>
    </div>
  )
}
