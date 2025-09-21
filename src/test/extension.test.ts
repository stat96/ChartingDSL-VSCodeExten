describe('ChartingDSL Extension', () => {
describe('ChartingDSL Extension', () => {
describe('ChartingDSL Extension', () => {
describe('ChartingDSL Extension', () => {
import * as assert from 'assert';
import * as vscode from 'vscode';

describe('ChartingDSL Extension', () => {
  it('should activate and register preview command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('chartingdsl.previewChart'));
  });
});
