# progress-bar

React progress-bar for scrolling height: ideal for articles, long reads...
Build with typescript.

Progress is only visible when the page extends the 100vh;

## Install

```bash
npm i react_pageread_progress_bar
```

## Props

```javascript

position={`CSS POSITION MARKUP`} //Position of progressbar
barColor={`STRING COLOR`} //Color of progressbar 
containerColor={`STRING COLOR`} //Color of container
```

## Usage

```tsx

import {ProgressBar} from 'react_pageread_progress_bar';


const App = () => {
  return <ProgressBar position={"fixed"} barColor={"lightgrey"} containerColor={"#FFFFFF"}/>
}
```

## License

MIT © [bdevwebsolutions](https://github.com/bdevwebsolutions)
