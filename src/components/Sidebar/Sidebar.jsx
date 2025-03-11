import { useState } from 'react'
import Links from './Links/Links'
import './Sidebar.scss'
import ToggleButton from './ToggleButton/ToggleButton'
import { delay, motion } from 'framer-motion'

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: 'spring',
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        }
    }
}

export default function Sidebar() {

    const [open, setOpen] = useState(false)


    return (
        <motion.div
            animate={open ? 'open' : 'closed'}
            className='sidebar'
        >
            <motion.div
                variants={variants}
                className="bg"
            >
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}
