import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({place}) => {
    return (
        <Link href="/place" className="cursor-pointer h-[450px] w-[250px] flex flex-wrap rounded-xl shadow-md">
            <div className="relative h-2/3 w-full">
                <Image
                    src={place.image} alt='image place'
                    className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover"
                />
                <div className="absolute right-0 bottom-0 capitalize p-4 bg-blue-700 text-white rounded-tl-xl font-semibold">
                    {place.city}
                </div>
            </div>
            <div className="flex flex-col gap-4 p-1">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">
                    {place.numOfPlaces} Places to stay
                </h2>
                <p className="text-center text-lg pb-2 text-slate-700">
                    Discover the best hotel or apartment for
                    your adventurous journey.
                </p>
            </div>
        </Link>
    );
};

export default Card;