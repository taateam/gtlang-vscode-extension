const vscode = require('vscode');
const cp = require('child_process');
const path = require('path');

function activate(context) {
  let disposable = vscode.commands.registerCommand('gtlang.runFile', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor - please open a GTLang file!');
      return;
    }

    const filePath = editor.document.fileName;

    if (!filePath.endsWith('.gtc')) {
      vscode.window.showErrorMessage('This command only works with .gtc files.');
      return;
    }

    const terminal = vscode.window.createTerminal('GTLang Run');
    terminal.show();
    terminal.sendText(`gtlang "${filePath}"`);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
