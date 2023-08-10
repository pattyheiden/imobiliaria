import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import {Menu} from '@headlessui/react';
import {useContext, useState} from "react";
import {HouseContext} from "../../../components/HouseContext";



const PriceRangeDropdown = () => {
    const {price, setPrice} = useContext(HouseContext);
    const [isOpen,setIsOpen]= useState(false);
    
    
    const prices=[
        {
            value: 'Preço (todos)'
        },
        {
            value: '5000 - 10000'
        },
        {
            value: '10000 - 19000'
        },
        {
            value: '20000 - 30000'
        },
        {
            value: '31000 - 40000'
        },
        {
            value: '41000 - 50000'
        },
        {
            value: '13000 - 180000'
        },
    ]
    

    return (
        <Menu as="div" className="dropdown relative">
            <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <RiWallet3Line className="dropdown-icon-primary" />
                <div>
                    <div className="text-[15px] font-medium leading-tight text-primary">{price}</div>
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
                    prices.map((price,index) =>{
                        return (
                            <Menu.Item 
                            onClick={()=>setPrice(price.value)}
                            as="li" 
                            key={index} 
                            className='cursor-pointer hover:text-slate-700 transition'>{price.value}</Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
};

export default PriceRangeDropdown;