import * as React from 'react'

interface Props {
  containerColor: string,
  barColor: string,
  position: "fixed" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "absolute" | "relative" | "static" | "sticky" | undefined,
}


export const ProgressBar: React.FC<Props> = ({containerColor, barColor,position}) => {

  const [progress, setProgress] = React.useState(0);

  const scrollHandler = () => {
    window.addEventListener('scroll', () => {
        let h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        setProgress(Math.ceil((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100));
    })
  }


  React.useEffect(() => {
    scrollHandler()
  }, [])

  const containerStyle: React.CSSProperties = {
    position: position, 
    width: "100%",
    height: "10px", 
    backgroundColor: `${containerColor}`
  }

  const barStyle: React.CSSProperties = {
    width: `${progress}%`,
    height: "10px", 
    backgroundColor: `${barColor}`, 
    transitionDuration: '0.2s', 
    transitionTimingFunction: "linear"
  } 


  return (
  <div style={containerStyle}>
    <div style={barStyle}>
    </div>
  </div>
  )
}
