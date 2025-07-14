// src/components/WaterWaveBackground.jsx
import React from 'react';

const WaterWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0"> {/* z-0 para que esté detrás de todo */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            minHeight: '100%', // Asegura que cubra toda la altura si es necesario
            transform: 'translateY(0%)', // Ajuste inicial si las ondas deben estar más abajo
        }}
      >
        {/* Onda Inferior - Color más claro */}
        <path
          fill="rgba(106, 17, 203, 0.6)" /* Morado claro para la onda inferior */
          fillOpacity="1"
          className="water-wave-animation-light"
          d="M0,192L60,192C120,192,240,192,360,197.3C480,203,600,213,720,202.7C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>

        {/* Onda Superior - Color más oscuro */}
        <path
          fill="rgba(37, 117, 252, 0.7)" /* Azul oscuro para la onda superior */
          fillOpacity="1"
          className="water-wave-animation-dark"
          d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,117.3C840,107,960,150,1080,154.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaterWaveBackground;