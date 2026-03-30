import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, id;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      dot.current.style.transform  = `translate(${mx - 3}px,${my - 3}px)`;
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.current.style.transform = `translate(${rx - 16}px,${ry - 16}px)`;
      id = requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('mousemove', move, { passive: true });

    const grow   = () => { ring.current.style.width = '48px'; ring.current.style.height = '48px'; };
    const shrink = () => { ring.current.style.width = '32px'; ring.current.style.height = '32px'; };
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener('mousemove', move);
    };
  }, []);

  const base = { position:'fixed', top:0, left:0, borderRadius:'50%', pointerEvents:'none', zIndex:9999 };
  return (
    <>
      <div ref={dot}  style={{ ...base, width:6, height:6, background:'var(--orange)', zIndex:9999 }} />
      <div ref={ring} style={{ ...base, width:32, height:32, border:'1.5px solid rgba(255,107,0,0.4)', zIndex:9998, transition:'width .2s,height .2s' }} />
      <style>{`@media(pointer:coarse){*{cursor:auto!important}}`}</style>
    </>
  );
};

export default Cursor;
