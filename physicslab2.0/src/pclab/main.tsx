"use client"

import { useRef, forwardRef } from 'react'
function Slider({label}: {label: string}) {
    return(
        <form className='flex flex-col'>
            <label className='text-white font-thin' htmlFor={label}>{label}</label>
            <input className='accent-white' type="range" id={label} name={label} min="0" max="50"/>
        </form>
    )
}
function Toggle({label}: {label: string}) {
    return(
    <label className="relative inline-flex mt-auto items-center cursor-pointer outline-none">
        <input type="checkbox" value="" className="sr-only peer" ></input>
        <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:4 peer-focus:blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
    </label>
    )
}

function Display({value}: {value:Number}) {
    return(
        <div className='h-fit w-fit border border-black bg-blue-500 justify-center mx-auto px-10 py-1'>
            <h1 className='text-2xl text-white'>Display</h1>
            <div className='justify-center text-center text-white text-4xl text-bold'>
                <h3>{String(value)}</h3>
            </div>
        </div>
    )
}
export default function laboratory() {
    return ( 
    <main className='flex w-screen h-screen flex-col items-center bg-gradient-to-b from-blue-300 to-blue-300'>
        <header className="flex fixed w-full items-center bg-gradient-to-r from-blue-700 to-blue-400 text-white p-5">
            <img className="flex h-16 w-1/8" src="https://www.snuchennai.edu.in/wp-content/uploads/2021/09/SNU-chennai-LOGO-2-300x102.jpg" alt="SNU Chennai" />
            <h1 className="flex items-end h-1/3 ml-auto font-bold text-3xl">Physics Virtual Lab</h1>
            <a href='/' className='flex ml-auto mr-12 font-bold text-blue-600 text-2xl'>Home</a>
        </header>
        <div className='flex my-auto justify-center flex-col items-center border border-black px-20 rounded-2xl bg-gradient-to-t from-blue-600 to-blue-600 h-2/3 w-1/2'>
            <h1 className=" text-3xl text-white font-sans font-semibold py-1">Planck’s Constant  Experimental Setup</h1>
            <div className="flex h-fit w-full justify-center items-center px-15 border border-blue-200">
                <div className="h-4/5 w-1/3 bg-black rounded-full ml-3 mr-auto"></div>
                <div className="flex h-1/2 w-full justify-center px-15 py-20 "></div>
                <div className="h-4/5 w-1/3 bg-yellow-300 rounded-full mr-3 ml-auto"></div>
            </div>
            <div className='inline-flex justify-center items-center'>
                <div className='px-10'>
                    <Display value={10}/>
                </div>
                <div>
                    <Slider label="Light Intensity"/>
                    <Slider label="Current Multiplier"/>
                    <Slider label="Voltage Adjustor"/>
                </div>
                
            </div>

            <div className='inline-flex justify-center items-center py-2'>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3'>500</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3'>540</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3'>570</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3'>635</button>
                <button className='bg-blue-500 text-white px-4 py-1 border border-black rounded-md mx-3'>460</button>
            </div>    
    </div>
    </main> 
    );
}
