"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { GlobeMethods, GlobeProps,  } from "react-globe.gl";
const Globe = dynamic(() => import("./Globe"), { ssr: false });

const GlobeVisualisation = () => {
  const globeSize = 1000;

  // Handle globe ready state
  const [globeReady, setGlobeReady] = useState<boolean>(false);

  const globeRef = useRef<GlobeMethods>(null);

  // When globe is ready set controls and viewpoints etc.
  useEffect(() => {
    // Check globe is initialised
    if (!globeRef.current) {
      return;
    }

    // Set controls etc....
  }, [globeReady]);

  // Points data - testing only
  const testPoints: GeoCoords[] = [
    { lat: 40.7128, lng: -74.0060, altitude: 0.5 }, // New York, USA
    { lat: 34.0522, lng: -118.2437, altitude: 0.5 }, // Los Angeles, USA
    { lat: 51.5074, lng: -0.1278, altitude: 0.5 }, // London, UK
    { lat: 35.6895, lng: 139.6917, altitude: 0.5 }, // Tokyo, Japan
    { lat: -33.8688, lng: 151.2093, altitude: 0.5 }, // Sydney, Australia
    { lat: 48.8566, lng: 2.3522, altitude: 0.5 }, // Paris, France
    { lat: 55.7558, lng: 37.6173, altitude: 0.5 }, // Moscow, Russia
    { lat: -23.5505, lng: -46.6333, altitude: 0.5 }, // São Paulo, Brazil
    { lat: 19.4326, lng: -99.1332, altitude: 0.5 }, // Mexico City, Mexico
    { lat: 39.9042, lng: 116.4074, altitude: 0.5 }, // Beijing, China
  ];


  // Set globe props
  const globeProps: GlobeProps = {
    onGlobeReady: () => setGlobeReady(true),
    width: globeSize,
    height: globeSize,
    backgroundColor: '#FFFFFF',
    showAtmosphere: true,
    pointsData: testPoints,
    globeImageUrl:
      "https://unpkg.com/three-globe@2.31.1/example/img/earth-dark.jpg",
    
  };

  return <Globe {...globeProps} ref={globeRef} />;
};

export default GlobeVisualisation;
