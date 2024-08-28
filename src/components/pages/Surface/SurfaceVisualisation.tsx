'use client'
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

const SurfaceVisualisation = ({points}) => {

    const Surface = dynamic(() => import("./Surface"), { ssr: false });

    const surfaceProps = {
        points,
    }

    const surfaceRef = useRef(null)

    return (
            <Surface {...surfaceProps}/>
    );
};

export default SurfaceVisualisation;