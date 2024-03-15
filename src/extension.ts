import * as vscode from "vscode";
import addFile from "./commands/addFile";
import addFilePatch from "./commands/addFilePatch";
import diffFile from "./commands/diffFile";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand("git-commands.addFile", addFile));
  context.subscriptions.push(vscode.commands.registerCommand("git-commands.addFilePath", addFilePatch));
  context.subscriptions.push(vscode.commands.registerCommand("git-commands.diffFile", diffFile));
}

export function deactivate() {}
