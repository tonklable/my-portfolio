import React from 'react';

const CircleChip = ({ tag }) => {
    const tags = tag.split(',');
    return (
        tags.map((tag) => (
            <span
                className="inline-flex items-center justify-center bg-transparent text-white border text-sm rounded-full px-3 py-0.5 mr-2 mb-2 transition duration-300 ease-in-out hover:bg-white hover:border-white hover:text-main"
            >
                {tag}
            </span>
        ))

    );
};

export default CircleChip;