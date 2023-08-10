import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import {Menu} from '@headlessui/react';
import {useContext, useState} from "react";
import {HouseContext} from "../../../components/HouseContext";



const CountryDropdown = () => {
    const {country, setCountry, countries} = useContext(HouseContext);
    const [isOpen,setIsOpen]= useState(false);

    return (
        <Menu as="div" className="dropdown relative">
            <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <RiMapPinLine className="dropdown-icon-primary" />
                <div>
                    <div className="text-[15px] font-medium leading-tight text-primary">{country}</div>
                    <div className="text-[13px] text-slate-500">Selecione</div>
                </div>
                    {
                        isOpen ?(
                            <RiArrowUpSLine className="dropdown-icon-secondary"/>
                        ):(
                            <RiArrowDownSLine className="dropdown-icon-secondary"/>
                        )
                    }
            </Menu.Button>
            
            <Menu.Items className="dropdown-menu">
                {
                    countries.map((country,index) =>{
                        return (
                            <Menu.Item 
                            onClick={()=>setCountry(country)}
                            as="li" 
                            key={index} 
                            className='cursor-pointer hover:text-slate-700 transition'>{country}</Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
};

export default CountryDropdown;