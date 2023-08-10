import {createContext, useEffect, useState} from "react";
import {housesData} from "../data";

export const HouseContext = createContext(null);

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Localização (todos)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Propriedade (todos)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Preço (todos)');
    const [loading, setLoading] = useState(false);

// return all countries
    useEffect(()=>{
        const allCountries=houses.map(house=>{
            return house.country;
        });
        // remove duplicates
        const uniqueCountries=['Localização (todos)',...new Set(allCountries)]
        // set to the state
        setCountries(uniqueCountries);
    },[]);
    
    
    // return all properties
    useEffect(()=>{
        const allProperties=houses.map(house=>{
            return house.type;
        });
        // remove duplicates
        const uniqueProperties=['Propriedade (todos)',...new Set(allProperties)]
        // set to the state
        setProperties(uniqueProperties);
    },[]);
    
    
    const handleClick=()=>{
        setLoading(true);
        
        // console.log(country,property,price);
        const isDefault=(str)=>{
            return str.split(' ').includes('(todos)')
        }
        
    
        const newHouses= housesData.filter(house=>{
            
            const housePrice=parseInt(house.price);
            const minPrice= parseInt(price.split(' ')[0])
            const maxPrice= parseInt(price.split(' ')[2])
            
            // if all value are selected
            if(house.country===country && house.type===property && housePrice>=minPrice && housePrice<=maxPrice){
                return house;
            }
            
            // if all value are default
            if(isDefault(country) && isDefault(property) && isDefault(price)){
                return house;
            }
            
            // if country is not default
            if(!isDefault(country) && isDefault(property) && isDefault(price)){
                return house.country===country;
            }
            
            // if property is not default
            if(!isDefault(property) && isDefault(country) && isDefault(price)){
                return house.type===property;
            }
            
            // if price is not default
            if(!isDefault(price) && isDefault(country) && isDefault(property)){
                if(housePrice>=minPrice && housePrice<=maxPrice){
                    return house;
                }
            }
            
            // if country and property is not default
            if(!isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.country===country && house.type===property;
            }
            
            // if country and price is not default
            if(!isDefault(country) && isDefault(property) && !isDefault(price)){
                if(housePrice>=minPrice && housePrice<=maxPrice){
                    return house.country===country;
                }
            }
            
            // if property and price is not default
            if(isDefault(country) && !isDefault(property) && !isDefault(price)){
                if(housePrice>=minPrice && housePrice<=maxPrice){
                    return house.type===property;
                }
            }
            
            // if(!isDefault(country) && !isDefault(property) && !isDefault(price)){
            //     if(housePrice>=minPrice && housePrice<=maxPrice){
            //         return house.type===property;
            //     }
            // }
        })
        
        
        setTimeout(()=>{
            return newHouses.length <1 ? setHouses([]):
            setHouses(newHouses),
            setLoading(false)
        },1000)
    }
    
    
    
    const houseInfo = {
        loading,
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick
    }


    return (
        <HouseContext.Provider value={houseInfo}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;