import { exec } from 'child_process';

export function renderChartDSL(dsl: string, callback: (output: string) => void) {
  // Save DSL to temp file
  const fs = require('fs');
  const tmp = require('os').tmpdir() + '/chartingdsl_temp.dsl';
  fs.writeFileSync(tmp, dsl);
  // Call Python backend
  exec(`python ../ChartingDSL/main.py "${tmp}"`, (err, stdout, stderr) => {
    if (err) callback(`Error: ${stderr}`);
    else callback(stdout);
  });
}
