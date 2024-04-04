import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
// import { Children } from 'react';


export default function MotAnimado({Children}) {
    const anim = (variants) =>{
        return{
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
        }
    } 
    const opacity = {
        initial:{
        opacity:0
        },
        enter: {
        opacity: 1,
        transition: {
        duration: 2
        }
        },
        exit: {
        opacity: 1
        }
    } 

  return (
    <motion.div {...anim(opacity)}>
        {Children}
    </motion.div>
  )
}

MotAnimado.propTypes = {
    children: PropTypes.node.isRequired
};
