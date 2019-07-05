// import React, { useRef, useState, useEffect } from 'react'
import React from 'react';
import { useSpring, animated } from 'react-spring'
// import { Illustration, Ellipse, Shape, RoundedRect, useRender, Hemisphere } from 'react-zdog'
// // New react-spring target, for native animation outside of React
// import { a, useSpring } from 'react-spring/zdog'
import './index.css'

// /** --- Basic, re-usable shapes -------------------------- */
// const TAU = Math.PI * 2
// const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.5} {...props} />
// const Leg = props => (
//   <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
//     <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
//     <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
//   </a.Shape>
// )
// const Arm = props => (
//   <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
//     <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
//     <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
//   </a.Shape>
// )

// /** --- Assembly ----------------------------------------- */
// function Guy() {
//   // Change motion every second
//   const [up, setUp] = useState(true)
//   useEffect(() => void setInterval(() => setUp(previous => !previous), 450), [])
//   // Turn static values into animated values
//   const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
//   // useRender allows us to hook into the render-loop
//   const ref = useRef()
//   let t = 0
//   useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))
//   return (
//     <Shape ref={ref} path={[{ x: -3 }, { x: 3 }]} stroke={4} color="#747B9E">
//       <a.Anchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
//         <Shape path={[{ x: -1.5 }, { x: 1.5 }]} translate={{ y: -6 }} stroke={9} color="#E1E5EE">
//           <a.Shape stroke={11} translate={{ y: -9.5 }} color={color}>
//             <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" />
//             <Ellipse diameter={6} rotate={{ x: -TAU / 10 }} translate={{ y: -4, z: -1 }} stroke={4} color="#444B6E" fill />
//             <Eye />
//             <Eye translate={{ x: 2.2, z: 4.5 }} />
//             <a.Ellipse diameter={1.3} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#444B6E" stroke={0.5} fill />
//             <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
//             <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
//             <Ellipse diameter={0.5} translate={{ x: 4.5, y: -4.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.5} fill />
//           </a.Shape>
//           <Arm rotate={rotation.interpolate(r => ({ x: -TAU / 4 + r }))} />
//           <Arm translate={{ x: 5, y: -2 }} rotate={rotation.interpolate(r => ({ x: TAU / 4 - r }))} />
//         </Shape>
//       </a.Anchor>
//       <Leg rotate={rotation.interpolate(r => ({ x: TAU / 5 - r / 1.2 }))} />
//       <Leg translate={{ x: 3 }} rotate={rotation.interpolate(r => ({ x: -TAU / 5 + r / 1.2 }))} />
//     </Shape>
//   )
// }

// function Milou() {
//   //const [up, setUp] = useState(true)
//   ///useEffect(() => void setInterval(() => setUp(prev => !prev), 450), [])
//   //const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
//   //const ref = useRef()
//   //let t = 0
//   //useRender(() => (ref2.current.rotate.y = Math.cos((t += 0.1) / TAU)))
//   return (
//     <Hemisphere diameter={20} stroke={false} color="#C25" backface="#EA0" />
//   )
// }

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App; 
