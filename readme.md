# electron-prerelease-check 

Make sure an Electron release is ready before publishing


## Installation

```
npm i -g electron/electron-prerelease-check
```

## Usage

```
electron/electron-prerelease-check
```

The first time you run the CLI, you'll be asked to authenticate with your GitHub
account. The token is stored in your home directory so this will only happen 
once.

You should see output like this:

```
  electron-prelease-check
    ✓ only one draft exists
    ✓ draft is a prerelease
    ✓ draft has release notes
    ✓ draft has all required assets

  4 passing (2s)
```

## License

MIT
