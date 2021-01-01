const webdriver = require('selenium-webdriver');

const SIGNAL_BINARY = "/Applications/Signal.app/Contents/MacOS/Signal"
const USER_DATA_DIRECTORY = "~/Library/Application Support/Signal"

const FRIENDS = ['John Doe', 'Jane Doe'];
const NICKNAMES = ['John', 'Jane'];
const YEAR = '2021';

const driver = new webdriver.Builder()
  .usingServer('http://localhost:9515/')
  .withCapabilities({
    chromeOptions: {
      binary: SIGNAL_BINARY,
      args: ['--user-data-dir="' + USER_DATA_DIRECTORY + '"', '--remote-debugging-port=9222']
    }
  })
  .forBrowser('electron')
  .build();

console.assert(FRIENDS.length == NICKNAMES.length, "The list of friends and the list of nicknames should have the same length.");

wait = (millisecs) => {
  var start = new Date().getTime();
  var end = start;
  while (end < start + millisecs) {
    end = new Date().getTime();
  }
}

(async () => {
  for (let index = 0; index < FRIENDS.length; index++) {
    contactXpath = "//span[text() = '" + FRIENDS[index] + "']"
    composeClass = "ql-editor"

    await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(contactXpath)), 20000)
      .then(async () => {
        return await driver.findElement(webdriver.By.xpath(contactXpath));
      }).then(async (element) => {
        console.log("Clicked on contact " + FRIENDS[index] + ".")
        await element.click()
      }).then(async () => {
        await driver.wait(webdriver.until.elementLocated(webdriver.By.className(composeClass)), 20000)
      }).then(async () => {
        return await driver.findElement(webdriver.By.className(composeClass))
      }).then(async (element) => {
        console.log("Composing message.")
        await element.sendKeys("Happy New Year, " + NICKNAMES[index] +
          "! May every day of " + YEAR + " bring joy in your life." + "\n");
      })
  }
  console.log("Automation finished. Closing Signal in 5 seconds.")
  driver.quit()
  await wait(5000);
})();