import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const containerRef = useRef();

  return (
    <Particles 
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    container={containerRef}
    options={
        {
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 220,
                        duration: 0.4,
                    },
                    grab: {
                        distance: 220,
                        duration: 0.4,
                    },
                    
                },
            },
            particles: {
                color: {
                    value: "#fff",
                },
                links: {
                    color: "#fff",
                    distance: 180,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 7 },
                },
            },
            detectRetina: true,
            fullScreen: { 
                enable: false,
                zIndex: -1
            },
            style: {
                position: 'absolute',
            }
        }
    }
    />
  )
}

export default Particle