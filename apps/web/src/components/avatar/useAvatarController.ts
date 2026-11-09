import { useCallback, useEffect, useRef, useState } from 'react';
export type AvatarState = 'WELCOME'|'IDLE'|'EXPLAINING'|'THINKING'|'LISTENING'|'SPEAKING';
export function useAvatarController() {
 const welcomeAlreadyPlayed=typeof window!=='undefined'&&Boolean(sessionStorage.getItem('khushi-welcome-played'));
 const [state,setState]=useState<AvatarState>(welcomeAlreadyPlayed?'IDLE':'WELCOME');
 const [videoSrc,setVideoSrc]=useState<string|null>(welcomeAlreadyPlayed?null:'/videos/welcome.mp4');
 const [videoError,setVideoError]=useState(false); const [activeSection,setActiveSection]=useState('home'); const videoRef=useRef<HTMLVideoElement>(null); const speakingRef=useRef(false); const explainedRef=useRef(false); const pendingExplanationRef=useRef(false);
 const transition=useCallback((next:AvatarState)=>{if(speakingRef.current&&next!=='SPEAKING')return;setVideoError(false);setState(next);setVideoSrc(next==='WELCOME'?'/videos/welcome.mp4':next==='EXPLAINING'?'/videos/explaining.mp4':null)},[]);
 const setSpeaking=useCallback((speaking:boolean)=>{speakingRef.current=speaking;if(speaking){setVideoSrc(null);setState('SPEAKING')}else setState('IDLE')},[]);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;const id=visible.target.id;setActiveSection(id);if(id==='projects'&&!explainedRef.current){if(sessionStorage.getItem('khushi-welcome-played')){pendingExplanationRef.current=false;if(!speakingRef.current){explainedRef.current=true;transition('EXPLAINING')}}else pendingExplanationRef.current=true}else if(!speakingRef.current&&state!=='WELCOME'&&state!=='EXPLAINING')transition('IDLE')},{rootMargin:'-25% 0px -45% 0px',threshold:[0,.2,.5]});document.querySelectorAll('[data-section]').forEach(section=>observer.observe(section));return()=>observer.disconnect()},[state,transition]);
 const onEnded=()=>{if(state==='WELCOME'){sessionStorage.setItem('khushi-welcome-played','1');if(pendingExplanationRef.current&&!speakingRef.current){pendingExplanationRef.current=false;explainedRef.current=true;transition('EXPLAINING');return}}transition('IDLE')};
 return {state,videoSrc,videoError,setVideoError,videoRef,activeSection,transition,setSpeaking,onEnded};
}
