import React from 'react';

const LinkChip = ({ name, link }) => {
    return (

        <a href={link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black border text-md rounded-lg px-3 py-0.5 transition duration-300 ease-in-out hover:bg-main hover:border-main hover:text-white"
        >
            {name}
        </a>

    );
};

export default LinkChip;