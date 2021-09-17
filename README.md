# onoff

If you own a [Netgear XR500](https://www.netgear.com/home/online-gaming/routers/xr500/) router and want the ability to toggle your guest network on/off then this utility might be for you. It can be used in interactive or backgroud mode (to automate on a schedule).

![Demo](onoff.gif)

## System requirements

- working installation of [nodejs](https://nodejs.org/en/) to set up as a command line utility.
- ability to clone this repository.

## Installation

```
npm install -g .
```

## Usage

`onoff --help`

**Result**

```groovy
onoff [command]

Commands:
  onoff interactive           onoff interactive           [aliases: i]
  onoff background [options]  onoff background --password <password>
                                                                    [aliases: b]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

### Interactive

`onoff interactive --help`

**Result**

```groovy
onoff interactive

onoff interactive

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

### Backgroud

`onoff background --help`

**Result**

```groovy
onoff background [options]

onoff background --password <password>

Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -p, --password  password for admin login to XR500 router   [string] [required]
```

## Cron

Before editing you could test your script running as sudo. This is what I ended up with:

```sh
#run-in-background.sh
echo "installing"
npm i -g /home/pop21/dev/code/onoff/
echo "running"
onoff b --p $ROUTER
```

_command_

```sh
export ROUTER=<replace-me-with-password>
sudo ~/onoff/run-in-background.sh
```

Edit your crontab file

```sh
crontab -e
```

Add your schedule to run, I'm running at 10pm and 6am.

```sh
0 22 * * *  ~/onoff/run-in-background.sh > ~/cron.log 2>&1
0 6 * * *   ~/onoff/run-in-background.sh > ~/cron.log 2>&1
```