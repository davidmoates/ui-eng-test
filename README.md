# Showcase IDX UI Engineer Hiring Project

This is a hiring project for our [UI Engineer](https://jobs.lever.co/showcaseidx/78478505-8661-4dd6-a7cf-c7b510b697f1) position.
If you apply, we'll ask you to do this project so we can assess your ability to do the kind of front-end work we do at Showcase IDX. We intend this to be a short project that you can complete in about an hour (maybe less) on your own.

This is a React app written to demonstrate a progress bar component called `ProgressBar`. We like you to add a new component called `KrellGauge`
that consists of multiple `ProgressBar`s in series, each showing a range a power of ten more than the previous (1..10, 11..100, 101..1000, and so on) See [Krell gauge](https://www.youtube.com/watch?v=fE1aOHRwbuk).

## Setup

- You'll need an environment with `git`, `node`, `npm`, and `yarn` installed
- Clone this repository locally
- Run `yarn install` to download and install the dependencies
- Run `npm run start` and view the application at http://localhost:3000 (if this doesn't work, try `yarn run start` instead)
- You can also run Storybook via `npm run storybook` and view it at http://localhost:9009

## The Assignment

1. Create a branch for your changes
1. Create a new component called `KrellGauge` that consists of multiple ProgressBars.  The first ProgressBar should have a low..high of 1..10, the second 11..100, the third 101..1000, and so on. A `KrellGauge` should have the properties:
    1. `count` the number of ProgressBars
    2. `value` the value to show across all the bars
3. In `App.js` create a new state value called `krell` that starts at 0 and increments by 1 each tick
4. Demo your `KrellGauge` below the existing demo of the progress bar in `App.js` with a `count` of 10 and using `krell` as the value
5. In `App.js` add a checkbox with the label `Monster from the Id mode`. Enabling this checkbox should cause `krell` to be multiplied by 1.1 each tick (false selects the default: increment `krell` by 1 each tick)
6. When everything works, create a patchset:
    * `git add .`
    * `git commit`
    * `git diff main <your-branch> > ui-eng-test-<your-name>.patch`
7. Email your patch file to us (we'll have exchanged numerous emails by this point)

## Rules

- Don't Panic! We want you to succeed, and this shouldn't take a long time (not more than an hour). Since it's a small project, we'll be looking closely at the *quality* of your code.
- Feel free to ask questions and to use any references you would normally use in your work.
- That said, we do expect this to be entirely your own work.  References are OK, collaboration is not.
- Anything not specified above is free for you to implement how you see fit. For example, the spec doesn't say anything about layout, so feel free to lay things out any way you like, or not at all.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
