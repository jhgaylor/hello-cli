# hello-cli

A tiny command-line tool that says hello. It exists so an agent has something
small and real to change.

## Install

```sh
npm install -g .
```

## Usage

```sh
hello            # Hello, world!
hello Ada        # Hello, Ada!
hello --shout Ada  # HELLO, ADA!
hello --version  # 0.1.0
hello -v         # 0.1.0
```

## Options

| Flag | What it does |
|---|---|
| `--shout` | Prints the greeting in upper case |
| `--version`, `-v` | Prints the version and exits |

## Licence

MIT
