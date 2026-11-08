import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {palette, typeStyles} from '../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const show = (frame: number, start: number, end: number, fade = 16) =>
  interpolate(frame, [start, start + fade, end - fade, end], [0, 1, 1, 0], clamp);
const slide = (frame: number, start: number, fps: number) =>
  spring({frame: Math.max(0, frame - start), fps, config: {damping: 16, stiffness: 110, mass: 0.7}});

const Label: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontFamily: typeStyles.body, fontWeight: 800, fontSize: 24, letterSpacing: 3, color: palette.ink, textTransform: 'uppercase'}}>{children}</div>
);

const Headline: React.FC<{children: React.ReactNode; size?: number; color?: string}> = ({children, size = 78, color = palette.ink}) => (
  <div style={{fontFamily: typeStyles.display, fontWeight: 900, fontSize: size, lineHeight: 0.98, letterSpacing: -3, color}}>{children}</div>
);

export const EverydayExplainer: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const hook = show(frame, 0, 128);
  const situation = show(frame, 112, 320);
  const explain = show(frame, 298, 625);
  const insight = show(frame, 600, 820);
  const close = show(frame, 795, 960);
  const mascotScale = 0.82 + slide(frame, 34, fps) * 0.18;

  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, color: palette.ink, overflow: 'hidden', fontFamily: typeStyles.body}}>
      <AbsoluteFill style={{background: 'radial-gradient(circle at 88% 14%, rgba(244,182,74,0.28), transparent 31%), radial-gradient(circle at 8% 86%, rgba(183,243,106,0.32), transparent 28%)'}} />
      <div style={{position: 'absolute', top: 58, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10}}>
        <div style={{fontWeight: 900, letterSpacing: 2, fontSize: 23}}>EVERYDAY / EXPLAINED</div>
        <div style={{fontWeight: 800, fontSize: 18, letterSpacing: 2, color: palette.muted}}>MOTION STUDY 001</div>
      </div>
      <div style={{position: 'absolute', top: 122, left: 64, width: 952, height: 2, backgroundColor: palette.ink, opacity: 0.13}} />

      {/* Scene 1: hook */}
      <div style={{position: 'absolute', top: 245, left: 66, right: 66, opacity: hook, transform: `translateY(${interpolate(slide(frame, 8, fps), [0, 1], [50, 0])}px)`}}>
        <Label>PERNAH MENGALAMI INI?</Label>
        <div style={{height: 26}} />
        <Headline size={87}>CUMA MAU CEK SATU NOTIFIKASI...</Headline>
        <div style={{height: 30}} />
        <div style={{display: 'inline-flex', padding: '15px 24px', backgroundColor: palette.lime, borderRadius: 18, fontSize: 28, fontWeight: 900}}>TIBA-TIBA SUDAH 30 MENIT.</div>
      </div>

      {/* Scene 2: recognizable situation */}
      <div style={{position: 'absolute', top: 310, left: 66, right: 66, opacity: situation, transform: `translateY(${interpolate(slide(frame, 120, fps), [0, 1], [55, 0])}px)`}}>
        <Label>AWALNYA SEDERHANA</Label>
        <div style={{height: 25}} />
        <Headline size={80}>Buka HP sebentar.</Headline>
        <div style={{height: 18}} />
        <div style={{fontSize: 38, lineHeight: 1.25, fontWeight: 600, maxWidth: 850}}>Lalu satu video muncul, disusul video lain. Tanpa sadar, kita terus menggulir layar.</div>
        <div style={{marginTop: 58, display: 'flex', alignItems: 'center', gap: 22}}>
          <div style={{width: 136, height: 230, border: `10px solid ${palette.ink}`, borderRadius: 30, backgroundColor: palette.white, padding: 12, boxSizing: 'border-box', transform: `rotate(${interpolate(frame, [120, 250], [-7, 3], clamp)}deg)`}}>
            <div style={{height: 12, width: 48, borderRadius: 20, backgroundColor: palette.ink, margin: '0 auto 15px'}} />
            {[0,1,2].map((n) => <div key={n} style={{height: 43, borderRadius: 10, backgroundColor: n === 1 ? palette.lime : palette.soft, marginBottom: 9}} />)}
          </div>
          <div style={{fontSize: 27, fontWeight: 800, color: palette.muted}}>scroll → scroll → scroll</div>
        </div>
      </div>

      {/* Scene 3: explanation cards */}
      <div style={{position: 'absolute', top: 260, left: 64, right: 64, opacity: explain}}>
        <Label>APA YANG MEMBUAT KITA TERUS SCROLL?</Label>
        <div style={{height: 24}} />
        <Headline size={74}>Tiga hal yang ikut berperan.</Headline>
        {[{n:'01',t:'Konten baru terus muncul',d:'Selalu ada hal berikutnya untuk dilihat.'},{n:'02',t:'Rasa ingin tahu',d:'Kita ingin tahu apa yang muncul setelah ini.'},{n:'03',t:'Tidak ada titik akhir yang jelas',d:'Feed dapat terus berlanjut saat kita menggulir.'}].map((item, index) => {
          const p = slide(frame, 325 + index * 52, fps);
          return <div key={item.n} style={{marginTop: 25, padding: '25px 26px', borderRadius: 25, backgroundColor: index === 1 ? palette.lime : palette.white, border: `2px solid ${palette.ink}`, display: 'flex', gap: 24, alignItems: 'center', transform: `translateX(${interpolate(p, [0,1], [65,0])}px)`, opacity: p}}>
            <div style={{fontSize: 31, fontWeight: 900, color: palette.muted}}>{item.n}</div>
            <div><div style={{fontSize: 32, fontWeight: 900}}>{item.t}</div><div style={{fontSize: 23, marginTop: 7, color: palette.muted}}>{item.d}</div></div>
          </div>;
        })}
      </div>

      {/* Scene 4: insight */}
      <div style={{position: 'absolute', top: 350, left: 66, right: 66, opacity: insight, transform: `translateY(${interpolate(slide(frame, 608, fps), [0, 1], [45, 0])}px)`}}>
        <Label>SEDIKIT INSIGHT</Label>
        <div style={{height: 28}} />
        <Headline size={82}>Bukan soal tidak boleh scrolling.</Headline>
        <div style={{height: 30}} />
        <div style={{fontSize: 40, lineHeight: 1.25, fontWeight: 650}}>Coba sadari kapan kamu mulai membuka aplikasi, dan tentukan kapan waktunya berhenti.</div>
        <div style={{marginTop: 42, display: 'inline-flex', padding: '18px 26px', borderRadius: 18, backgroundColor: palette.ink, color: palette.paper, fontWeight: 800, fontSize: 27}}>SADAR DULU, BARU LANJUT.</div>
      </div>

      {/* Scene 5: mascot-led close */}
      <div style={{position: 'absolute', top: 270, left: 66, right: 66, opacity: close, textAlign: 'center', transform: `scale(${mascotScale})`}}>
        <Img src={staticFile('assets/mascot-wave-reference.png')} style={{width: 370, height: 440, objectFit: 'contain', objectPosition: 'center', display: 'block', margin: '0 auto'}} />
        <div style={{marginTop: 15}}><Headline size={76}>Kamu juga sering begini?</Headline></div>
        <div style={{marginTop: 24, fontSize: 31, fontWeight: 800, color: palette.muted}}>Ceritakan pengalamanmu di komentar.</div>
      </div>

      <div style={{position: 'absolute', bottom: 60, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10}}>
        <div style={{fontWeight: 900, fontSize: 19, letterSpacing: 2}}>HAL KECIL. PERSPEKTIF BARU.</div>
        <div style={{fontWeight: 800, fontSize: 18, color: palette.muted}}>01 / 30</div>
      </div>
    </AbsoluteFill>
  );
};
