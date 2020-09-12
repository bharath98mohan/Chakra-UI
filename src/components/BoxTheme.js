import React from 'react'
import { Box } from "@chakra-ui/core";
import './BoxTheme.css'

function BoxTheme() {
    return (
        <div className='style'>
           <center>
            <Box margin='100px' border="1px solid black" width="50px" height={32} borderRadius="md">
                 Card
            </Box>
            </center>
            
        </div>
    )
}

export default BoxTheme
