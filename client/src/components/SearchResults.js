import React, { useContext } from 'react'

import CarContext from '../context/car/CarContext'

import Car from './Car'

const SearchResults = () => {
    // init Context ---------------------
    const carContext = useContext(CarContext);
    const { resArray, resStatus } = carContext;
    return (
        <>
            {resArray.map((car, index) => {
                return <Car car={car} key={index} />
            })}
        </>
    )
}
export default SearchResults;