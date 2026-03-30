import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, id;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      id = requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('mousemove', onMove);

    const setHover = () => { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(255,107,0,0.9)'; };
    const clearHover = () => { ring.style.width = '32px'; ring.style.height = '32px'; ring.style.borderColor = 'rgba(255,107,0,0.4)'; };

    const targets = document.querySelectorAll('a, button');
    targets.forEach((el) => {
      el.addEventListener('mouseover', setHover);
      el.addEventListener('mouseout', clearHover);
    });

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseover', setHover);
        el.removeEventListener('mouseout', clearHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position:'fixed',top:0,left:0,width:'6px',height:'6px',borderRadius:'50%',
        background:'#FF6B00',pointerEvents:'none',zIndex:9999,
        transition:'width 0.2s,height 0.2s',
      }} />
      <div ref={ringRef} style={{
        position:'fixed',top:0,left:0,width:'32px',height:'32px',borderRadius:'50%',
        border:'1.5px solid rgba(255,107,0,0.4)',pointerEvents:'none',zIndex:9998,
        transition:'width 0.25s,height 0.25s,border-color 0.25s',
      }} />
      <style>{`@media(pointer:coarse){.cursor-dot,.cursor-ring{display:none}}`}</style>
    </>
  );
};

export default Cursor;
