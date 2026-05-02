"use client";

import { useEffect, useRef } from "react";

export function TubesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    let app: any;
    let isMounted = true;

    const initTubes = async () => {
      try {
        // Dynamically import the installed package
        // Note: the component might be available directly on the package or under build/cursors/tubes1.js
        const module = await import("threejs-components/build/cursors/tubes1.js");
        const TubesCursor = module.default || module;

        if (!isMounted) return;

        // Custom Orange palette
        app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#ffedd5", "#fdba74", "#f97316"],
            lights: {
              intensity: 200,
              colors: ["#ea580c", "#c2410c", "#fed7aa", "#ff8a00"]
            }
          }
        });
      } catch (error) {
        console.error("Failed to load TubesCursor", error);
      }
    };

    initTubes();

    return () => {
      isMounted = false;
      if (app && typeof app.destroy === 'function') {
        app.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ overflow: "hidden" }}
    />
  );
}
