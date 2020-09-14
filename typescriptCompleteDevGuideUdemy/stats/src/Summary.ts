import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {  // a coordinator of sorts, it doesnt do anything else, but calls functions "run" and "print" that are available on the analyzer and outputTarget (whatever they may be - you can switch them out, which makes this really reusable.)
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}
  
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches); // the implementation....  the generic analyzer with the run function that is required by the interface above
    this.outputTarget.print(output);
  }
}
