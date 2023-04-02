// components/Card.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ imageUrl, title, subtitle }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-0 pb-[56.25%]">
                <Image src={imageUrl} layout="fill" objectFit="cover" objectPosition='top' alt={title} />
            </div>
            <div className="p-4">
                <h2 className="text-xl text-main font-bold">{title}</h2>
                <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
            </div>
        </div>
    );
};

