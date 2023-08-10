import {Link, useParams} from 'react-router-dom';
import { housesData } from './../../data';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
    const {id}= useParams();
    
    const house=housesData.find(house=>{
        return house.id === parseInt(id);
    })
    
    console.log(house);
    
    return (
        <section>
            <div className="container mx-auto min-h-[800px] mb-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className='text-2xl font-semibold'>{house.name}</h2>
                        <h3 className='text-lg mb-4'>{house.address}</h3>
                    </div>
                    <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
                        <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
                        <div className='bg-slate-500 text-white px-3 rounded-full'>{house.country}</div>
                    </div>
                    <div className='text-3xl font-semibold text-slate-600'>$ {house.price}</div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt="" />
                        </div>
                        <div className='flex gap-x-6 text-slate-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl'/>
                                <div>{house.bedrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl'/>
                                <div>{house.bathrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl'/>
                                <div>{house.surface}</div>
                            </div>
                        </div>
                        <div>{house.description}</div>
                    </div>
                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                <img className='rounded-full' src={house.agent.image} alt="" />
                            </div>
                            <div>
                                <div className='font-bold text-lg'>{house.agent.name}</div>
                                <Link to='' className='text-slate-700 text-sm'>View Listings</Link>
                            </div>
                        </div>
                        
                        <form className='flex flex-col gap-y-4'>
                        <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm' type="text" placeholder='Name*'/>    
                        <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm' type="text" placeholder='Email*'/>    
                        <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm' type="text" placeholder='Phone*'/>    
                        <textarea className='border border-gray-300 focus:border-slate-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue="Hello, I'm interested in this add"></textarea>
                        <div className='flex gap-x-5'>
                            <button className="relative px-5 py-2 font-medium text-white group text-sm w-full">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-slate-500 group-hover:bg-slate-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-slate-700 group-hover:bg-slate-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-slate-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-slate-400 -rotate-12"></span>
                            <span className="relative">Send message</span>
                            </button>
                            
                            <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group text-sm w-full border border-gray-300">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-slate-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">Call</span>
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;