# 🌐 GTLang Syntax Highlighting for VSCode

GTLang is a custom programming language with a unique syntax inspired by scripting, functional programming, and natural readability. This extension provides syntax highlighting for `.gtc` files in Visual Studio Code.

![GTLang Sample](./images/sample.png)

---

## ✨ Features

- ✅ Syntax highlighting for:
  - Variables (`$`, `$$`)
  - Functions (`@function`)
  - Classes (`^ClassName`)
  - Control keywords (`if`, `else`, `foreach`, `return`, etc.)
  - Comments (`//`, `/* ... */`)
  - Strings (quoted & unquoted)
  - Unicode support for variable/function/class names

---

## 📦 Installation

### 1. From VSIX (local)

```bash
vsce package
code --install-extension gtlang-0.0.1.vsix
```

### 2. From VSCode (if published)

Search for GTLang in the Extensions Marketplace.
📁 File Types Supported

    .gtc – GTLang source file

## 🎨 Example Code (GTLang)

### Sample GTLang program
```gtlang
$var: 123
@print $var
```

### Unicode support 
```gtlang
$переменная: 5
@добавлять $переменная
```
# gtlang-vscode-extension
