# onoff

If you own a [Netgear XR500]() router and want the ability to toggle your guest network on/off then this utility might be for you. It can be used in interactive or backgroud mode (to automate on a schedule).

## System requirements

- working installation of [npm]() to set up as a command line utility.
- ability to clone this repository.

## Installation

```
npm install -g .
```

## Usage

`kidsoff --help`

**Result**

```groovy
kidsoff <command>

Commands:
  kidsoff background [options]  Examples:
                                kidsoff background --password <password>
                                ... is the same as ...
                                kidsoff b -p <password>             [aliases: b]
  kidsoff interactive           Examples:
                                kidsoff interactive
                                ... is the same as ...
                                kidsoff i                           [aliases: i]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### Interactive

`kidsoff interactive --help`

**Result**

```groovy
kidsoff interactive

Examples:
kidsoff interactive
... is the same as ...
kidsoff i

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### Backgroud

`kidsoff background --help`

**Result**

```groovy
kidsoff background [options]

Examples:
kidsoff background --password <password>
... is the same as ...
kidsoff b -p <password>

Options:
  --version        Show version number                                 [boolean]
  --help           Show help                                           [boolean]
  --password, --p  password for admin login to XR500 router  [string] [required]
```