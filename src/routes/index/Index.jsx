import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/NavBar'

const Index = () => {
  return (
    <div className='bg-customSecondary-800'>
      <PageContainer>
        <Navbar/>

        <h1 className="text-4xl font-bold mt-7">Página Principal</h1>
        <p className="mt-2 text-lg">Bienvenido a nuestra aplicación.</p>
      </PageContainer>
    </div>
  )
}

export default Index
