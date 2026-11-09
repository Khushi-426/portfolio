import { TTSProvider } from './TTSProvider.js';
import type { VoiceProvider } from './VoiceProvider.js';
const provider:VoiceProvider=new TTSProvider();
export const synthesize=(text:string)=>provider.synthesize(text);
