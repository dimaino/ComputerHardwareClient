export interface Cpu {
  CPUId: number;
  Name: string;
  CoreCount: number;
  ThreadCount: number;
  BaseFrequency: number;
  MaxFrequency: number;
  L3Cache: number;
  TDP: number;
}
