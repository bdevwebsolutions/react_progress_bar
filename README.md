# progress-bar

React progress-bar for scrolling height: ideal for articles, long reads...

## Install

```bash
npm install --save progress-bar
```

## Props

Markup :  - position:       css-position rule
          - containerColor: backgroundcolor of container
          - barColor:       backgroundcolor of progressbar

## Usage

```tsx

import {ProgressBar} from 'progress-bar'


const App = () => {
  return <ProgressBar position={"fixed"}barColor={"lightgrey"} containerColor={"#FFFFFF"}/>
}
```

## License

MIT © [bdevwebsolutions](https://github.com/bdevwebsolutions)
