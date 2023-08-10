import {useContext} from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import PriceRangeDropdown from "../PriceRangeDropdown/PriceRangeDropdown";
import PropertyDropdown from "../PropertyDropdown/PropertyDropdown";

import {RiSearch2Line} from 'react-icons/ri';
import {HouseContext} from "../../../components/HouseContext";


const Search = () => {

    const {handleClick} = useContext(HouseContext);

    return (
        <section className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
            <CountryDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button 
            onClick={()=>handleClick()}
            className="box-border relative z-30 inline-flex items-center justify-center w-full lg:max-w-[162px] px-8 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-md cursor-pointer group ring-offset-2 ring-1 ring-slate-300 ring-offset-indigo-200 hover:ring-slate-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <RiSearch2Line className="mr-2" /> 
            </button>
        </section>
    );
};

export default Search;