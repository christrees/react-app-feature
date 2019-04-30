# react-app-feature
react-app UX Feature Testing Automation

***

react-app-feature project to run WebdriverIO tests with [Cucumber](https://cucumber.io/) and follow [TTD](https://en.wikipedia.org/wiki/Test-driven_development) and [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) to create a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for [react-app](http://demo.christrees.com/react-app/)

## Requirements

- Node version 4.8 or higher

Although this project works fine with NPM we recommend to use Yarn (>= 1.0.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple we use yarn in this guide, but feel free to replace this with NPM if that is what you are using.

## Quick start

1. Clone the git repo — `git clone https://github.com/christrees/react-app-feature.git`

2. Install the dependencies 

```sh
$ yarn install
```

4. Run the tests

```sh
$ yarn test
```


# How to write a test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./src/features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

__githubSeach.feature__
```gherkin
Feature: Github test
    As a Developer in Test
    I want to search react-app repository
    So that I can use it in my future tests

Scenario: open URL
    Given I open the url "https://github.com/christrees/react-app"
    Then  I expect that the url is "https://github.com/christrees/react-app"
    And   I expect that the title is "GitHub - christrees/react-app:react application template"

Scenario: Another test
    Given ...

```

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# Configurations

To configure your tests, checkout the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `wdio.conf.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
wdio.<ENVIRONMENT>.conf.js
```

Now you can create a specific config for your pre-deploy tests:

__wdio.PageObjectTest.conf.js__
```js
const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
}];
wdioConfig.config.logLevel = 'silent',
wdioConfig.config.baseUrl = 'http://demo.christrees.com/react-app/',
wdioConfig.config.specs = [ __dirname + '/src/pospecs/*.spec.js' ],
wdioConfig.config.services = ['selenium-standalone', 'visual-regression'];
wdioConfig.config.framework = 'mocha';

exports.config = wdioConfig.config;
```

Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just add the desired configuration file as the first parameter:

```sh
$ yarn run wdio wdio.PageObjectTest.conf.js
```

# Running single feature
Sometimes its useful to only execute a single feature file, to do so use the following command:

```sh
$ yarn run wdio -- --spec ./test/features/githubSearch.feature
```


# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ yarn run wdio -- --cucumberOpts.tagExpression=@Tag,@AnotherTag
```

You can add multiple tags separated by a comma

special thanks
- [webdriverIO-with-cucumberBDD](https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD)
- [webdriverIO](https://webdriver.io/)
