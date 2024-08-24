   "use client"
   import { BtnList } from '@/app/data'
    import React from 'react'
import NavButton from './NavButton'

    const Navigation = () => {
        const angelIncrement = 360/BtnList.length
    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
           <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
           {
                BtnList.map((btn, index)=>{
                    const angleRad = (index*angelIncrement*Math.PI)/180;
                    const radius = "calc(20vw - 1rem)"
                    // : isMedium
                    // ? "calc(30vw - 1rem)"
                    // : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                }
                
            )
            }
            </div>
        </div>
    )
    }

    export default Navigation