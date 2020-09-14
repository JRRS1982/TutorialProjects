import { HtmlReport } from './reportTargets/HtmlReport';
import { MatchData } from './MatchData';
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {  // a coordinator of sorts, it doesn't do anything else, but calls functions "run" and "print" that are available on the analyzer and outputTarget (whatever they may be - you can switch them out, which makes this really reusable.)
  static winsAnalysisWithHTMLReport(teamName: string): Summary { // don't need to create a new instance of the class to call a static method
    return new Summary( new WinsAnalysis(teamName), new HtmlReport())
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}
  
  
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches); // the implementation....  the generic analyzer with the run function that is required by the interface above
    this.outputTarget.print(output);
  }
}
