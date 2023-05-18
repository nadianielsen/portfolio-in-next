"use client"

import { AnimatePresence, motion } from "framer-motion";

const FooterWrapper = ({children}) => {
    return ( 
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y:50}}
            animate={{ opacity: 1, y:0}}
            transition={{ delay: 0.20}}>
                {children}
            </motion.div>
        </AnimatePresence>
     );
}
 
export default FooterWrapper;