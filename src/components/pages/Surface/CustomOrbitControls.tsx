import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CustomOrbitControls() {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    const currentControls = controls.current;
    
    if (!currentControls) return;

    // Disable default right mouse button panning
    currentControls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,   // Left mouse button pans
      MIDDLE: THREE.MOUSE.ROTATE,  // Middle mouse button rotates
      RIGHT: THREE.MOUSE.PAN,   // Right mouse button pans
    };

    // Adjust the zoom speed
    currentControls.zoomSpeed = 1.2;

    // Add custom logic for Revit-like behavior
    const handleContextMenu = (event) => event.preventDefault();
    gl.domElement.addEventListener('contextmenu', handleContextMenu);

    return () => {
      gl.domElement.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [camera, gl]);

  return <DreiOrbitControls ref={controls} args={[camera, gl.domElement]} />;
}

export default CustomOrbitControls;
