# progress-bar

React progress-bar for scrolling height: ideal for articles, long reads...
Build with typescript

## Install

```bash
npm install --save progress-bar
```

## Props

```javascript

position={`CSS POSITION MARKUP`} //Position of progressbar
barColor={`STRING COLOR`} //Color of progressbar 
containerColor={`STRING COLOR`} //Color of container
```

## Usage

```tsx

import {ProgressBar} from 'progress-bar'


const App = () => {
  return <ProgressBar position={"fixed"} barColor={"lightgrey"} containerColor={"#FFFFFF"}/>
}
```

## License

MIT © [bdevwebsolutions](https://github.com/bdevwebsolutions)
