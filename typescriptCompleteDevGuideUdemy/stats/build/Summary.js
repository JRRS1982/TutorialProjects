"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHTMLReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches); // the implementation....  the generic analyzer with the run function that is required by the interface above
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
