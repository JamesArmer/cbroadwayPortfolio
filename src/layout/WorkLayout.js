import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './WorkLayoutStyles'

export const WorkLayout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
