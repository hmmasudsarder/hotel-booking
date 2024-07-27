import Image from 'next/image';
import React from 'react';

const Hero = ({image, mainHeader, secondaryHeader}) => {
    return (
        <div>
            <div className="relative h-screen w-full">
                <Image className='brightness-50 h-full w-full object-cover' src={image} alt='heroimage'/>
                <div className="absolute bottom-0 left-0 top-0 right-0 flex flex-col justify-center items-center gap-8">
                    <h3 className="text-white text-6xl font-bold">
                        {mainHeader}
                    </h3>
                    <h3 className="text-white text-4xl font-semibold">
                        {secondaryHeader}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Hero;