'use client'
import SurfaceVisualisation from '@/components/pages/Surface/SurfaceVisualisation';

  // Generate 100 random points in 3D space with random z between 0 and 10
  const points = Array.from({ length: 1000 }, () => [
    Math.random() * 100 - 5, // x-coordinate
    Math.random() * 100 - 5, // y-coordinate
    Math.random() * 1,     // z-coordinate (randomized between 0 and 10)
  ]);
  
const SurfaceVisualisationPage = () => {
    return (
        <div>
            <h1>Surface Visualisation</h1>

            <div className='w-screen h-screen'>
                <SurfaceVisualisation points={points}/>
            </div>
        </div>
    );
};

export default SurfaceVisualisationPage;