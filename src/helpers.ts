import * as vscode from "vscode";

export function terminal(): vscode.Terminal {
  const terminal = vscode.window.activeTerminal || vscode.window.createTerminal();
  terminal.show();

  return terminal;
}

export function getActiveFileName(): string | undefined {
  return vscode.window.activeTextEditor?.document.fileName;
}
