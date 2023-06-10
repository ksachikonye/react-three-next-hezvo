import { Children } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@pmndrs/branding'
import { useStore } from './store'

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
          Reversed Bullet
          <br />
          Hezvo
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>22/04/1994</div>
      </div>
      <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />
      <div className="info">
        <h1>71</h1>
        <List open={state.open}>
          <h3>Lockheed Martin SR-71</h3>
          <h3>“Strategic”</h3>
          <h3>
            <span className="accent">Reconnaissance</span>
          </h3>
          <h4> Pratt & Whitney J58</h4>
          <p className="price">3,540 km/h</p>
          <p>
            So secretive was its development, they changed the name 3 times, including constructing actual planes for the names. Fastest
            crewed air breathing machine ever with a rocket based combined cycle, a necessary requirement to provide air moving at the same
            speed as the jet. Could only be used once every two weeks and requied distilled water for cleaning.
          </p>
        </List>
      </div>
    </>
  )
}
