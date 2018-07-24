import { TimeSource } from "../timeSource";

export class StubTimeSource extends TimeSource {
  currentTime = () => {
    return new Date(2012,11,25,12,0,0,0);
  }
}