export interface VoiceProvider {
  synthesize(text:string):Promise<{audioUrl:string;duration?:number}|null>;
  stop():void;
}
