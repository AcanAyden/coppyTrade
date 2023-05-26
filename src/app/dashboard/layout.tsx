"use client"
import { Header } from '@/components/Dashboard/Header'
import { Navbar } from '@/components/Dashboard/Navbar'
import { ManageFollower } from '@/components/Modal/Manage/ManageFollower'
import Notice from '@/components/Modal/Notice'
import { DrawerWithdraw } from '@/components/Modal/Withdraw/DrawerWithdraw'
import { AppShell } from '@mantine/core'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
      <AppShell
      padding="md"
      navbar={<Navbar/>}
        >
              <Header/>
              {/* <Notice/> */}
              <div style={{ overflow: "hidden", background:"#F8F8FA", marginInline: "-1rem",  minHeight: "calc(100vh - 92px)", position: "relative", marginBottom: "-1rem", paddingBottom: "-1rem" }}>
      {children}
      </div>
              {/* <ManageFollower/> */}
              <DrawerWithdraw/>
    </AppShell>
  )
}

export default Layout
