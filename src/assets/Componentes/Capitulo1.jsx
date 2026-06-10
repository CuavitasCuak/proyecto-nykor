import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

export const Capitulo1 = () => {
  const puertaRef = useRef(null);
  const emiliaRef = useRef(null);
  const lucesRef = useRef(null);

  const aniPuerta = useRef(null);
  const aniEmilia = useRef(null);
  const aniLuces = useRef(null);

  const [mostrarBoton, setMostrarBoton] = useState(true);

  const [papelesVisibles, setPapelesVisibles] = useState(() => {
    const estado = {};
    for (let i = 1; i <= 20; i++) {
      estado[`PAPEL_${i}`] = true;
    }
    return estado;
  });

  useEffect(() => {
    aniPuerta.current = lottie.loadAnimation({
      container: puertaRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/puerta.json'
    });

    aniEmilia.current = lottie.loadAnimation({
      container: emiliaRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'emilia.json'
    });

    aniLuces.current = lottie.loadAnimation({
      container: lucesRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './luces.json'
    });

    return () => {
      aniPuerta.current?.destroy();
      aniEmilia.current?.destroy();
      aniLuces.current?.destroy();
    };
  }, []);

  const iniciar = () => {
    setMostrarBoton(false);
    aniEmilia.current?.play();

    setTimeout(() => {
      aniLuces.current?.play();
    }, 4000);
  };

  const abrirPuerta = () => {
    aniPuerta.current?.play();
  };

  const ocultarPapel = (id) => {
    setPapelesVisibles(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const styles = {
    contenedor: {
      width: '1000px',
      height: '563px',
      margin: 'auto',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("/pasillo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },

    luces: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1
    },

    emilia: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      left: '350px',
      top: '120px',
      zIndex: 2
    },

    puerta: {
      position: 'absolute',
      width: '54px',
      height: '287px',
      left: '691px',
      top: '150px',
      cursor: 'pointer',
      zIndex: 3
    },

    papeles: {
      position: 'absolute',
      width: '177px',
      height: '240px',
      left: '72px',
      top: '73px',
      zIndex: 4
    },

    boton: {
      position: 'absolute',
      left: '50%',
      top: '85%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10
    }
  };

  return (
    <div style={styles.contenedor}>

      {/* ESCENA LAYERS */}
      <div ref={lucesRef} style={styles.luces}></div>
      <div ref={emiliaRef} style={styles.emilia}></div>
      <div ref={puertaRef} style={styles.puerta} onClick={abrirPuerta}></div>

      {/* BOTÓN INICIO */}
      {mostrarBoton && (
        <div style={styles.boton}>
          <button onClick={iniciar}>
            Comenzar
          </button>
        </div>
      )}

      {/* PAPEL SVG */}
      <div style={styles.papeles}>
        <svg viewBox="0 0 292.5 407.8">

          <defs>
            <style>{`.cls-1{fill:#5c6240}.cls-2{fill:#66613c}`}</style>
          </defs>

          {papelesVisibles.PAPEL_20 && (
            <g onClick={() => ocultarPapel('PAPEL_20')} style={{ cursor: 'pointer' }}>
              <polygon className="cls-2" points="201.2 119.6 201.2 90.6 246.9 105.1 246.9 149.1 201.2 142.7"/>
            </g>
          )}

          {papelesVisibles.PAPEL_19 && (
            <g onClick={() => ocultarPapel('PAPEL_19')} style={{ cursor: 'pointer' }}>
              <polygon className="cls-2" points="174.2 111.9 216 126.6 216 196.7 174.2 189.1"/>
            </g>
          )}

          {papelesVisibles.PAPEL_18 && (
            <g onClick={() => ocultarPapel('PAPEL_18')} style={{ cursor: 'pointer' }}>
              <polygon className="cls-2" points="258.4 202.5 286.1 208.3 286.1 149.1 258.4 142.1"/>
            </g>
          )}

          {papelesVisibles.PAPEL_1 && (
            <g onClick={() => ocultarPapel('PAPEL_1')} style={{ cursor: 'pointer' }}>
              <path className="cls-2" d="M138.8 160.1l20 3.9-3.2 23.3-16.6.7z"/>
            </g>
          )}

        </svg>
      </div>

    </div>
  );
};