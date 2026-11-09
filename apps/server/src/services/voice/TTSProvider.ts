import type { VoiceProvider } from './VoiceProvider.js';
export class TTSProvider implements VoiceProvider {
  async synthesize(text:string):Promise<{audioUrl:string;duration?:number}|null>{
    const key=process.env.AI_API_KEY;if(!key)return null;
    const response=await fetch('https://api.openai.com/v1/audio/speech',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.AI_TTS_MODEL||'tts-1',voice:process.env.AI_TTS_VOICE||'nova',input:text,response_format:'mp3'})});
    if(!response.ok)throw new Error('TTS provider request failed');const bytes=Buffer.from(await response.arrayBuffer());return {audioUrl:`data:audio/mpeg;base64,${bytes.toString('base64')}`};
  }
  stop():void{}
}
