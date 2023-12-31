"use client"
import { useState } from 'react';
import Aim from './aim';
import Formulas from './formula';
import Table from './table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import img from './phy.png'
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


function Display1({value, label}: {value:number ; label:string}) {
    return(
        <div className='h-fit w-fit border border-black rounded-2xl bg-gradient-to-t from-blue-400 to to-blue-700 justify-center mx-auto px-5 py-1'>
            <h1 className='text-2xl text-white'>{label}</h1>
            <div className='justify-center text-center text-white text-4xl text-bold'>
                <h3>{value.toFixed(2)}A</h3>
            </div>
        </div>
    )
}

function Display2({value, label}: {value:number ; label:string}) {
    return(
        <div className='h-fit w-fit border border-black rounded-2xl bg-gradient-to-t from-blue-400 to to-blue-700 justify-center mx-auto px-5 py-1'>
            <h1 className='text-2xl text-white'>{label}</h1>
            <div className='justify-center text-center text-white text-4xl text-bold'>
                <h3>{value.toFixed(2)}V</h3>
            </div>
        </div>
    )
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

export default function Laboratory() {
    const [buttonProp1, setButton1Prop] = useState(false);
    const [buttonProp2, setButton2Prop] = useState(false);
    const [buttonProp3, setButton3Prop] = useState(false);
    const [lightColor, setLightColor] = useState(false); 
    const [waveLength, setWaveLength] = useState(0);
    const [waveColor, setWaveColor] = useState('white');
    const [userVoltage, setUserVoltage] = useState(0);
    const [buttonProp4, setButton4Prop] = useState(false);
    const [buttonProp5, setButton5Prop] = useState(false);
    const data = [
        { wavelength: 600, stoppingPotential: -0.30, inverseWavelength: 1.5 },
        { wavelength: 570, stoppingPotential: -0.45, inverseWavelength: 1.75 },
        { wavelength: 540, stoppingPotential: -0.60, inverseWavelength: 1.85 },
        { wavelength: 500, stoppingPotential: -0.76, inverseWavelength: 2.00 },
        { wavelength: 460, stoppingPotential: -0.92, inverseWavelength: 2.17 },
      ];
      
    
    const handleLightButtonClick = () => {
        setLightColor(!lightColor);
    }
    const handleLightButtonClick460 = () => {
        if(lightColor) {
            setWaveColor('blue');
            setWaveLength(460);
            console.log(waveLength);
            setUserVoltage(-0.92)
        }

    }
    const handleLightButtonClick500 = () => {
        if(lightColor) {
            setWaveColor('cyan');
            setWaveLength(500);
            console.log(waveLength);
            setUserVoltage(-0.76)
        }
      };
    const handleLightButtonClick540 = () => {
        if(lightColor) {
            setWaveColor('green');
            setWaveLength(540);
            console.log(waveLength);
            setUserVoltage(-0.60)
        }
    }
    const handleLightButtonClick570 = () => {
        if(lightColor) {
            setWaveColor('yellow');
            setWaveLength(570);
            console.log(waveLength);
            setUserVoltage(-0.45)
        }

    }
    const handleLightButtonClick635 = () => {
        if(lightColor) {
            setWaveColor('red');
            setWaveLength(635);
            console.log(waveLength);
            setUserVoltage(-0.30)
        }

    }
    
    

    return (
    <main className='flex w-fit min-h-screen md:w-screen  md:min-h-screen flex-col  items-center  bg-gradient-to-b animate-movingBg from-blue-800 via-blue-950 to-blue-800'>
        <header className="flex w-full items-center bg-gradient-to-tr  from-blue-700 py-3 to-blue-400 text-white p-1">
            <img className="flex h-10 w-1/8" src="https://media.discordapp.net/attachments/1164584907192938657/1170592901303124018/image_8.png?ex=65599a98&is=65472598&hm=74797897c1f89f538f522779938c1aa26fc4ddec605dc866cd0ac2ca1ae1e129&=&width=1440&height=398" alt="SNU Chennai" />
            <h1 className="flex text-lg font-bold tracking-[-0.05em] text-white sm:text-4xl md:text-3xl sm:leading-[3.5rem] ml-auto">Physics Virtual Lab</h1>
            <a href='https://physics.frenzyvjn.tech/' className='flex ml-auto font-bold text-white text-lg'>Home</a>
            <a href='https://drive.google.com/file/d/1H-1UISYXXdapWHROunrpk2-ngpY67OYC/view?usp=sharing' className='flex font-bold mr-3 ml-3 text-white text-lg'>Lab Manual</a>
        </header>
        <div className='flex mt-5 border border-white rounded-lg p-2 gap-3 mb-3'>
            <button className='flex mx-auto bg-inherit border text-xl border-white text-white text-center py-2 px-4' onClick={() => setButton1Prop(true)}>Aim</button>
            <Aim trigger={buttonProp1} setTrigger={setButton1Prop}>
                <h3 className='text-white'>Calculate (i) Planck’s constant and (ii) work function of the metal using photoelectric effect</h3>
            </Aim>
            <button className='flex mx-auto bg-inherit border text-xl border-white text-white text-center py-2 px-4' onClick={() => setButton2Prop(true)}>Formula</button>
            <Formulas trigger={buttonProp2} setTrigger={setButton2Prop}>
                <p className='text-white'></p>
                <img src={img}></img>
            </Formulas>
            <button className='flex mx-auto bg-inherit border text-xl border-white text-white text-center py-2 px-4' onClick={() => setButton3Prop(true)}>Table</button>
            <Table trigger={buttonProp3} setTrigger={setButton3Prop}>
            <table>
                <thead>
                    <tr>
                    <th className='text-center text-white border'>Wavelength</th>
                    <th className='text-center px-5 text-white border'>460</th>
                    <th className='text-center px-5 text-white border'>500</th>
                    <th className='text-center px-5 text-white border'>540</th>
                    <th className='text-center px-5 text-white border'>570</th>
                    <th className='text-center px-5 text-white border'>600</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='text-center text-white border'>1/λ</td>
                    <td className='text-center text-white border'>2.17</td>
                    <td className='text-center text-white border'>2.00</td>
                    <td className='text-center text-white border'>1.85</td>
                    <td className='text-center text-white border'>1.75</td>
                    <td className='text-center text-white border'>1.5</td>
                    </tr>
                    <tr>
                    <td className='text-center text-white border'>Stopping Potential (V)</td>
                    <td className='text-center text-white border'>-0.92</td>
                    <td className='text-center text-white border'>-0.76</td>
                    <td className='text-center text-white border'>-0.62</td>
                    <td className='text-center text-white border'>-0.46</td>
                    <td className='text-center text-white border'>-0.30</td>
                    </tr>
                </tbody>
            </table>
            </Table>
            <button className='flex mx-auto bg-inherit border text-xl border-white text-white text-center py-2 px-4' onClick={() => setButton4Prop(true)}>Graph</button>
            
            <Table trigger={buttonProp4} setTrigger={setButton4Prop}>
            <div className='mt-5'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='inverseWavelength' label={{ value: '1/Wavelength', position: 'insideBottomRight', offset: -10 }} />
                <YAxis label={{ value: 'Stopping Potential (V)', angle: -90, position: 'insideBottomLeft' }} />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='stoppingPotential' stroke='#8884d8' activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            </Table>
            <button className='flex mx-auto bg-inherit border text-xl border-white text-white text-center py-2 px-4' onClick={() => setButton5Prop(true)}>Result</button>
            <div>
                <Aim trigger={buttonProp5} setTrigger={setButton5Prop}>
                <div className='mt-5'>
                    <p className='text-white '>Planck's constant, h = 6.636X10<sup>-34</sup>Js</p>
                    <p className='text-white'>Work function of given metallic film, ɸ = 1.5 eV</p>
                </div>
                </Aim>
            </div>
        </div>
        <div className='flex  justify-center flex-col items-center bg-teal-400 border-opacity-20 bg-opacity-20 border-white border-[5px] w-fit py-1 px-16 shadow-lg h-fit rounded-2xl '>
            <h1 className=" text-3xl font-bold tracking-[-0.04em] text-white sm:text-3xl sm:leading-[3.5rem]">Planck’s Constant Setup</h1>
            <div className="flex h-fit w-full justify-center items-center px-15 border-4 rounded-xl mb-5 border-blue-400">
                <div className="h-4/5 w-1/3 ml-3 mr-auto rounded-full" id="frame"><Light color={waveColor}/></div>
                <div className="flex h-1/2 w-full justify-center px-15 py-20"></div>
                <div className="h-4/5 w-1/3 rounded-full mr-3 ml-auto" id="light"><Light color={lightColor?'yellow':'white'}/></div>
            </div>
            <div className='inline-flex justify-center items-center'>
                <div className=''>
                    <Display1 value={0} label={"Current"}/>                    
                {/*    <button className='flex mx-auto bg-inherit text-white text-center' onClick={handleToggle}><Btn1 label={currentVoltage?'Voltage':'Current'}/></button>
                    */}
                </div>
                <div className='px-4'>
                    <Display2 value={(userVoltage)} label={"Voltage"}/>
                </div>

                
            </div>
            <div className='flex flex-col justify-center items-center py-1 border rounded-lg'>
                <p className=''>Wavelength (in nm)</p>
                <div>
                    <button className='bg-blue-500 text-white px-4 py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick460}>460</button>
                    <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick500}>500</button>
                    <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick540}>540</button>
                    <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick570}>570</button>
                    <button className='bg-blue-500 px-4 text-white py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick635}>635</button>
                </div>
            </div>    
            <button className='bg-blue-500 text-white px-4 py-1 border border-black rounded-md mx-3' onClick={handleLightButtonClick}>Light</button>


            
        </div>
    </main> 
    );
}
