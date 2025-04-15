import React, { useRef, useState , useEffect} from 'react';

const ZoomLens = ({ src, zoom = 2, aspectRatio = 1 }) => {
    const containerRef = useRef(null);
    const [bgPos, setBgPos] = useState("center");
    const [isZooming, setIsZooming] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // breakpoint tuỳ chỉnh được
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBgPos(`${x}% ${y}%`);
    };

    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          aspectRatio,
          border: "1px solid #ccc",
          overflow: "hidden",
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: isZooming && !isMobile ? `${zoom * 100}%` : "cover",
          backgroundPosition: isZooming && !isMobile ? bgPos : "center",
          cursor: !isMobile ? "zoom-in" : "default",
          transition: "background-size 0.2s ease",
        }}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onMouseEnter={!isMobile ? () => setIsZooming(true) : undefined}
        onMouseLeave={!isMobile ? () => setIsZooming(false) : undefined}
      />
    );
  };

export default ZoomLens;