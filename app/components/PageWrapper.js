"use client"

import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({children}) => {
    return ( 
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 5}}
            animate={{ opacity: 1, y:0}}
            transition={{ delay: 0.50}}>
                {children}
            </motion.div>
        </AnimatePresence>
     );
}
 
export default PageWrapper;