# eslint-plugin-pros

To use this in your repo:

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pros`:

```
$ npm install eslint-plugin-pros --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pros` globally.

## Usage

Add `pros` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pros"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pros/rule-name": 2
    }
}
```

## Supported Rules

* pros/no-classNames
* pros/no-lodash-full-lib
* pros/no-react-bootstrap-full-lib


# eslint-plugin-pros
