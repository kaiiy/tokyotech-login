# TokyoTech Login

[[NOTE]]
> This repository is a port of [titech-login](https://github.com/Kanagu09/titech-login), originally created by [@Kanagu09](https://github.com/Kanagu09).

This is a Google Chrome extension that automatically signs you into the Tokyo Tech Portal.

Please use it at your own risk.

## Usage

1. Clone this repository.
2. Create `config.ts` and fill it with your matrix. (Use `mv config.ts.example config.ts`)
3. Run `yarn && yarn build`
4. Launch Google Chrome.
5. Go to `chrome://extensions/`.
6. Turn on Developer mode.
7. Click "LOAD UNPACKED" and select the `tokyotech-login` directory.
8. When you access `https://portal.nap.gsic.titech.ac.jp`, iit will automatically sign you in.
