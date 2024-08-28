'use-client'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo } from 'react';
import Delaunator from 'delaunator';

const Surface = ({points, ...otherProps }: any) => {
  /// Perform Delaunay triangulation
  const { vertices, indices } = useMemo(() => {
    // Convert points to flat array suitable for Delaunator
    const flatPoints = points.flat();
    
    // Perform Delaunay triangulation
    const delaunay = Delaunator.from(points);
    const triangles = delaunay.triangles;

    // Create a Float32Array for vertices
    const verticesArray = new Float32Array(flatPoints.length);
    flatPoints.forEach((point, i) => {
      verticesArray[i] = point;
    });

    // Create a Uint16Array for indices
    const indicesArray = new Uint16Array(triangles);

    return { vertices: verticesArray, indices: indicesArray };
  }, [points]);

    // Create BufferGeometry with vertices and indices
    const geometry = useMemo(() => {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geom.setIndex(new THREE.BufferAttribute(indices, 1));
      geom.computeVertexNormals(); // Compute normals for shading
      return geom;
    }, [vertices, indices]);
  

  // Create a material that supports shading
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x0077ff, // Blue color
        side: THREE.DoubleSide, // Show both sides of the triangles
        flatShading: false, // Smooth shading
        metalness: 0.3, // Optional: add some metalness for visual effect
        roughness: 0.5, // Optional: control roughness
      }),
    []
  );



  return (
    <Canvas>
      <OrbitControls />
      {/* Add lighting for shading */}
      <ambientLight intensity={0.5} /> {/* Soft ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} /> {/* Main light source */}
      <mesh geometry={geometry} material={material} />
    </Canvas>
  );
};

export default Surface;
