"use client"
import { Header } from '@/components/Dashboard/Header'
import { Navbar } from '@/components/Dashboard/Navbar'
import { AppShell } from '@mantine/core'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
      <AppShell
      padding="md"
      navbar={<Navbar/>}
        >
              <Header/>
      {children}
    </AppShell>
  )
}

export default Layout
