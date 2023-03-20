import React from 'react'
import { Country } from '../types/types';
import { Badge } from './Badge';

interface CountryItemProps {
    country: Country;
}

export const CountryItem = ({country}: CountryItemProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <img src={country.flag} alt={country.name} width={150}/>
            <p>{country.name}</p>
            <p>{country.capital}</p>
            <p>{country.region}</p>
            <Badge color="bg-primary" label="area" value={country.area}/>
            <Badge color="bg-secondary" label="population" value={country.population}/>  
        </li>
    )
}
