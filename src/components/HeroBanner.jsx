import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '12px', xs:'70px'},
      ml: { sm: '50px' }
    }}>
      <Typography color="FF2625" fontWeight="600" fontSize="26px">
        WONDER WOMAN WORKOUT APP
      </Typography>
    </Box>
  )
}

export default HeroBanner