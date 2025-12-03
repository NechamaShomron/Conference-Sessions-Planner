export enum Track {
  Frontend = "Frontend",
  Backend = "Backend",
  DevOps = "DevOps",
  AI = "AI",
}

export interface Session {
  id: string;
  title: string;
  speaker: string;
  track: string;
  startTime: string;
  endTime: string;
  room: string;
  description: string;
}
