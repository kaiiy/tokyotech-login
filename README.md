# TokyoTech Login

> [!NOTE]
> This repository is a port of [titech-login](https://github.com/Kanagu09/titech-login), originally created by [@Kanagu09](https://github.com/Kanagu09).

This is a Google Chrome extension that automatically signs you into the Tokyo Tech Portal.

Please use it at your own risk.

## Usage

Follow these steps to set up and use this project:

1. Clone this repository.

```bash
git clone git@github.com:kaiiy/tokyotech-login.git
cd tokyotech-login
```

2. Copy the example configuration file and fill it with your matrix information:

```bash
cp config.ts.example config.ts
```

config.ts:

```ts 
const USER_DATA = {
    ID: "",
    MATRIX: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ],
} as const;

export { USER_DATA };
```

3. Install dependencies and build the project:

```bash
yarn install && yarn build
```

4. Install the extension:
   1. Open Google Chrome.
   2. Go to `chrome://extensions/`.
   3. Turn on Developer mode.
   4. Click "LOAD UNPACKED" and select the `tokyotech-login` directory.
   5. When you access `https://portal.nap.gsic.titech.ac.jp`, it will automatically sign you in.
