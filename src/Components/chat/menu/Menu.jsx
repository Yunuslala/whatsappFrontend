import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Header } from './Header'
import { SearchBar } from './SearchBar'
import Conversations from './Conversations'

export const Menu = () => {
  const [text,settext]=useState('')
  return (
    <>
        <Box>
            <Header />
            <SearchBar settext={settext}/>
            <Conversations text={text}/>
        </Box>
    </>
  )
}
