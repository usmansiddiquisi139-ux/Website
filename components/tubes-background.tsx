"use client";

import { useEffect, useRef } from "react";

const CDN_URL =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

export function TubesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let app: any;
    let isMounted = true;

    // Size canvas to full viewport — covers both desktop and mobile equally
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const initTubes = async () => {
      try {
        // Dynamic import of the ES module from CDN (cdn.jsdelivr.net is whitelisted in CSP)
        const mod = await import(/* webpackIgnore: true */ CDN_URL);
        const TubesCursor = mod.default || mod;

        if (!isMounted) return;

        if (typeof TubesCursor !== "function") {
          console.error("[TubesBackground] TubesCursor is not a function:", TubesCursor);
          return;
        }

        app = TubesCursor(canvas, {
          tubes: {
            colors: ["#ffedd5", "#fdba74", "#f97316"],
            lights: {
              intensity: 200,
              colors: ["#ea580c", "#c2410c", "#fed7aa", "#ff8a00"],
            },
          },
        });
      } catch (err) {
        console.error("[TubesBackground] Failed to initialize:", err);
      }
    };

    initTubes();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resize);
      if (app && typeof app.destroy === "function") {
        app.destroy();
      }
    };
  }, []);

  return (
    // Canvas is fixed and covers the full viewport on all screen sizes
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
