import puppeteer from 'puppeteer';
import ora from 'ora';

const spinner = new ora();
spinner.spinner = 'pong'

// Specific selectors for xr500 router, lots of iFrames
const settingsSelector = 'li.style-scope:nth-child(8) > a:nth-child(1) > span:nth-child(3)'
const guestSelector = '#guest > a'
const guestCheckbox1 = '#main > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > label:nth-child(2)'
const guestCheckbox2 = '#have_an > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > label:nth-child(2)'
const guestSettingsApply = '#apply'
const frameGuestSub = 'formframe'
const frameSettingsSub = 'http://192.168.1.1/adv_index.htm'

async function routerScript(pw) {

    await spinner.start('Toggling Guest Network On / Off')
    const CREDS = {
        username: "admin",
        password: pw
    }
    // launch browser, if you want to watch turn headless to false
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
    });

    // const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 720 })

    // set the HTTP Basic Authentication credential
    await page.authenticate(CREDS);
    await page.goto('http://192.168.1.1');

    spinner.text = 'Logging in'

    // click settings, router pages are a bit slow so lots of waiting
    await page.waitForTimeout(8000);
    // await page.screenshot({ path: 'loggedin.png' });
    await page.click(settingsSelector)

    spinner.text = 'Navigating to Settings'

    // click guest network
    await page.waitForTimeout(4000);
    const settingsFrame = page.frames().find(frame => frame.url() === frameSettingsSub);
    await settingsFrame.click(guestSelector)

    spinner.text = 'Navigating to Guest Network Settings'

    // wait guest settings frame to load
    await page.waitForTimeout(4000);
    const guestFrame = page.frames().find(frame => frame.name() === frameGuestSub);

    spinner.text = 'Toggling On / Off'

    // check enable / disable guest 2.4ghz
    await guestFrame.waitForSelector(guestCheckbox1);
    await guestFrame.click(guestCheckbox1);

    // check enable / disable guest 5ghz
    await guestFrame.waitForSelector(guestCheckbox2);
    await guestFrame.click(guestCheckbox2);

    spinner.text = 'Saving...'

    // check apply
    await guestFrame.waitForSelector(guestSettingsApply);
    await guestFrame.click(guestSettingsApply)
    await page.waitForTimeout(1000);

    await page.screenshot({ path: 'final.png' });
    await browser.close();

    return await spinner.succeed('Success: Wifi may disconnect briefly')
};

export async function turnoff(password) {
    try {
        return await routerScript(password);
    } catch (error) {
        console.log(error)
        return await spinner.fail(error.message)
    }
}