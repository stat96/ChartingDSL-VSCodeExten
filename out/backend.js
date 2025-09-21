"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderChartDSL = void 0;
const child_process_1 = require("child_process");
function renderChartDSL(dsl, callback) {
    // Save DSL to temp file
    const fs = require('fs');
    const tmp = require('os').tmpdir() + '/chartingdsl_temp.dsl';
    fs.writeFileSync(tmp, dsl);
    // Call Python backend
    (0, child_process_1.exec)(`python ../ChartingDSL/main.py "${tmp}"`, (err, stdout, stderr) => {
        if (err)
            callback(`Error: ${stderr}`);
        else
            callback(stdout);
    });
}
exports.renderChartDSL = renderChartDSL;
//# sourceMappingURL=backend.js.map