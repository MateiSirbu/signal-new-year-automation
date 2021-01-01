# New Year message automation for Signal 🎉

Do you have friends? Do they use [Signal](https://signal.org/en/)? Would you like to send them all New Year wishes right when the clock strikes midnight, but you've only got two hands? 

First of all, kudos to you for using the best messenger app (YMMV, I value privacy over features), and secondly, fear not, this Selenium automation does it all for (the two of) you.

## Prerequisites

- NodeJS and the following packages: `electron-chromedriver@8.0.0` and `selenium-webdriver@3.6.0`. At the time of writing, Signal runs on Chromium 80, therefore only these specific versions worked for me.
- An UNIX shell; tested on `bash` and `zsh`.

## Installation guide

- Install the aforementioned packages with `npm i`;
- Schedule the automation by changing the `whenToRun` variable inside `run.sh`;
- Configure the variables `SIGNAL_BINARY`, `USER_DATA_DIRECTORY`, `FRIENDS`, `NICKNAMES` and `YEAR` inside `script.js` to your own needs;
- Allow execution of the script with `chmod u+x ./run.sh` and run it.
- You're good to go, enjoy the few seconds you just gained!