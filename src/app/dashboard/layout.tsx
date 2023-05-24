"use client"
import { Header } from '@/components/Dashboard/Header'
import { Navbar } from '@/components/Dashboard/Navbar'
import Notice from '@/components/Modal/Notice'
import { AppShell } from '@mantine/core'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
      <AppShell
      padding="md"
      navbar={<Navbar/>}
        >
              <Header/>
              <div style={{ overflow: "hidden" }}>
              <Notice/>
      {children}
      </div>
    </AppShell>
  )
}

export default Layout
