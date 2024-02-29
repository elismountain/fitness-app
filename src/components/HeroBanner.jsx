import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '12px', xs:'70px'},
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="FF2625" fontWeight="600" fontsize="26px">
        WONDER WOMAN WORKOUT APP
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontsize: { lg: '44px', sx: '40px'}}}>
      Every workout is a step towards becoming <br /> Wonder Woman!
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
      Sign in to see more exercises
      </Typography>
    </Box>
  )
}

export default HeroBanner