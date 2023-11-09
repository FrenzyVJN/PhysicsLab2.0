"use client"
import { useState } from 'react';
import Aim from './aim';

{/*}
function Slider({label}: {label: string}) {
    return(
        <form className='flex flex-col'>
            <label className='text-white font-thin' htmlFor={label}>{label}</label>
            <input className='accent-white' type="range" id={label} name={label} min="0" max="50"/>
        </form>
    )
}
*/}
function Display({value, label}: {value:string ; label:string}) {
    return(
        <div className='h-fit w-fit border border-black rounded-2xl bg-gradient-to-t from-blue-400 to to-blue-950 justify-center mx-auto px-5 py-1'>
            <h1 className='text-2xl text-white'>{label}</h1>
            <div className='justify-center text-center text-white text-4xl text-bold'>
                <h3>{String(value)}</h3>
            </div>
        </div>
    )
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (newValue: number) => void }) {
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value, 10); // Parse the input value as an integer
      onChange(newValue); // Call the onChange function with the new value
    };
  
    return (
      <form className="flex flex-col">
        <label className="text-white font-thin" htmlFor={label}>{label}</label>
        <input className="accent-white active:accent-slate-400" type="range" id={label} name={label} min="-50" max="50" step="1" value={value} onChange={handleSliderChange} />
      </form>
    );
  }
  
function Light({color}: {color:string}) {
    const customStyles = {
        backgroundColor: color,
      };
    return(
        <div>

            <div
            className="rounded-full px-15 py-16" style={customStyles}>
            </div>
        </div>
        )
}


export default function laboratory() {
    const [buttonProp, setButtonProp] = useState(false);
    const [lightColor, setLightColor] = useState(false); 
    const [waveColor, setWaveColor] = useState('white');
    const [userVoltage, setUserVoltage] = useState(0);
    const [lightIntensity, setLightIntensity] = useState(0);
    const [currentMultiplier, setCurrentMultiplier] = useState(0);

    const handleLightButtonClick = () => {
        setLightColor(!lightColor);
    }
    const handleLightButtonClick460 = () => {
        setWaveColor('blue');
    }
    const handleLightButtonClick500 = () => {
        setWaveColor('cyan');
      };
    const handleLightButtonClick540 = () => {
        setWaveColor('green');    
    }
    const handleLightButtonClick570 = () => {
        setWaveColor('yellow');
    }
    const handleLightButtonClick635 = () => {
        setWaveColor('red');
    }
    const voltageAdjustor = (newValue : number) => {
        console.log("Current Voltage - ",newValue);
        setUserVoltage(newValue);
    }
    const handleLightIntensity = (newValue : number) => {
        console.log("Light Intensity - ",newValue);
        setLightIntensity(newValue);
    }
    const handleCurrentMultiplier = (newValue : number) => {
        console.log("Current multiplier - "+newValue);
        setCurrentMultiplier(newValue);
    }
    return (
    <main className='flex w-screen h-screen flex-col items-center bg-gradient-to-b from-blue-950 to-blue-400'>
        <header className="flex fixed w-full items-center bg-gradient-to-tr from-blue-700 to-blue-400 text-white p-3">
            <img className="flex h-16 w-1/8" src="https://media.discordapp.net/attachments/1164584907192938657/1170592901303124018/image_8.png?ex=65599a98&is=65472598&hm=74797897c1f89f538f522779938c1aa26fc4ddec605dc866cd0ac2ca1ae1e129&=&width=1440&height=398" alt="SNU Chennai" />
            <h1 className="flex h-1/3 ml-auto font-bold text-3xl ">Physics Virtual Lab</h1>
            <a href='/' className='flex ml-auto font-bold text-white text-2xl'>Home</a>
            <a href='/' className='flex ml-3 mr-3 font-bold text-white text-2xl'>Theory</a>
            <a href='/' className='flex font-bold mr-3 text-white text-2xl'>Simulation</a>
        </header>
        <div className='flex my-auto mb-1/2 justify-center flex-col items-center border border-black w-1/2 px-16 py-3 rounded-2xl bg-gradient-to-t from-blue-950 to-blue-500'>
            <h1 className=" text-3xl text-white font-sans font-semibold py-1">Planck’s Constant Setup</h1>
            <div className="flex h-fit w-full justify-center items-center px-15 border rounded-xl border-blue-200">
                <div className="h-4/5 w-1/3 ml-3 mr-auto rounded-full" id="frame"><Light color={waveColor}/></div>
                <div className="flex h-1/2 w-full justify-center px-15 py-20"></div>
                <div className="h-4/5 w-1/3 rounded-full mr-3 ml-auto" id="light"><Light color={lightColor?'yellow':'white'}/></div>
            </div>
            <div className='inline-flex justify-center items-center'>
                <div className=''>
                    <Display value={(currentMultiplier*0.1).toFixed(2)} label={"Current"}/>
                    
                {/*    <button className='flex mx-auto bg-inherit text-white text-center' onClick={handleToggle}><Btn1 label={currentVoltage?'Voltage':'Current'}/></button>
                    */}
                </div>
                <div className='px-4'>
                    <Display value={(userVoltage*0.1).toFixed(2)} label={"Voltage"}/>
                </div>
                <div>
                    <button className='flex mx-auto bg-inherit text-white text-center' onClick={() => setButtonProp(true)}>Aim</button>
                    <Aim trigger={buttonProp} setTrigger={setButtonProp}>
                        <h3>Testing</h3>
                    </Aim>
                    <Slider label="Light Intensity" value={lightIntensity} onChange={handleLightIntensity}/>
                    <Slider label="Current Multiplier" value={currentMultiplier} onChange={handleCurrentMultiplier} />
                    <Slider label="Voltage Adjustor" value={userVoltage} onChange={voltageAdjustor} />
                </div>
                
            </div>

            <div className='inline-flex justify-center items-center py-2'>
                <button className='bg-blue-500 text-white px-4 py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick460}>460</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick500}>500</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick540}>540</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick570}>570</button>
                <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick635}>635</button>
                
            </div>    
            <button className='bg-blue-500 text-white px-4 py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick}>Light</button>
            
        </div>
    </main> 
    );
}
