# eslint-config-or-bachar
Shareable eslint config


Installation
------
```
$ npm install eslint-config-or-bachar
```

Using a Shareable Config
------
Shareable configs are designed to work with the extends feature of .eslintrc files. Instead of using a file path for the value of extends, use your module name. For example:

```
{
    "extends": "eslint-config-or-bachar"
}
```

You can also omit the `eslint-config-` and it will be automatically assumed by ESLint:

```
{
    "extends": "or-bachar"
}
```
