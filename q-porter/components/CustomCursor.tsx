import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (!isInitialized) {
        setIsInitialized(true);
      }
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the element being hovered is clickable
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], [data-cursor="pointer"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add cursor pointer class to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.setAttribute('data-cursor', 'pointer');
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render cursor if mouse is not in the viewport and component hasn't been initialized
  if (!isHovering && isInitialized) return null;

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isPointer ? '30px' : '20px',
    height: isPointer ? '30px' : '20px',
    borderRadius: '50%',
    backgroundColor: isPointer ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.1)',
    border: isPointer ? '2px solid rgba(147, 51, 234, 0.9)' : '1.5px solid rgba(147, 51, 234, 0.7)',
    boxShadow: isPointer 
      ? '0 0 15px rgba(147, 51, 234, 0.8)' 
      : '0 0 8px rgba(147, 51, 234, 0.5)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    transition: 'all 0.15s ease-out, width 0.2s ease-out, height 0.2s ease-out',
    backdropFilter: 'blur(2px)',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  };

  const cursorDotStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '6px',
    height: '6px',
    backgroundColor: 'rgba(147, 51, 234, 0.9)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    transition: 'all 0.05s ease-out',
  };

  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(${isPointer ? '1.2' : '1.05'});
            opacity: ${isPointer ? '1' : '0.8'};
          }
        }
        
        @keyframes pulse-stronger {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
      <div style={{
        ...cursorStyle,
        animation: isPointer ? 'pulse-stronger 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' : cursorStyle.animation,
        overflow: 'visible'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '1px solid rgba(147, 51, 234, 0.5)',
          transform: 'translate(-50%, -50%)',
          animation: isPointer 
            ? 'pulse-stronger 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.3s' 
            : 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.3s',
        }} />
      </div>
      <div style={cursorDotStyle} />
    </>
  );
};

export default CustomCursor;
