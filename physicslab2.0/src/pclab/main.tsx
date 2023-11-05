"use client"

function Slider({label}: {label: string}) {
    return(
        <form className='flex flex-col'>
            <label className='text-white font-thin' htmlFor={label}>{label}</label>
            <input className='accent-white' type="range" id={label} name={label} min="0" max="50"/>
        </form>
    )
}

function Display({value}: {value:Number}) {
    return(
        <div className='h-fit w-fit border border-black rounded-2xl bg-gradient-to-t from-blue-400 to to-blue-950 justify-center mx-auto px-10 py-1'>
            <h1 className='text-2xl text-white'>Display</h1>
            <div className='justify-center text-center text-white text-4xl text-bold'>
                <h3>{String(value)}</h3>
            </div>
        </div>
    )
}
export default function laboratory() {
    return ( 
    <main className='flex w-screen h-screen flex-col items-center bg-gradient-to-b from-blue-950 to-blue-400'>
        <header className="flex fixed w-full items-center bg-gradient-to-r from-blue-700 to-blue-400 text-white p-5">
            <img className="flex h-16 w-1/8" src="https://media.discordapp.net/attachments/1164584907192938657/1170592901303124018/image_8.png?ex=65599a98&is=65472598&hm=74797897c1f89f538f522779938c1aa26fc4ddec605dc866cd0ac2ca1ae1e129&=&width=1440&height=398" alt="SNU Chennai" />
            <h1 className="flex items-end h-1/3 ml-auto font-bold text-3xl">Physics Virtual Lab</h1>
            <a href='/' className='flex ml-auto mr-12 font-bold text-blue-600 text-2xl'>Home</a>
        </header>
        <div className='flex my-auto justify-center flex-col items-center border border-black px-20 rounded-2xl bg-gradient-to-t from-blue-950 to-blue-500 h-2/3 w-1/2'>
            <h1 className=" text-3xl text-white font-sans font-semibold py-1">Planck’s Constant  Experimental Setup</h1>
            <div className="flex h-fit w-full justify-center items-center px-15 border rounded-xl border-blue-200">
                <div className="h-4/5 w-1/3 bg-black rounded-full ml-3 mr-auto"></div>
                <div className="flex h-1/2 w-full justify-center px-15 py-20"></div>
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
