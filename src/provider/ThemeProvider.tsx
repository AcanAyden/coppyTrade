'use client'

import { ColorScheme, ColorSchemeProvider, MantineProvider as  UIProvider} from '@mantine/core'
import { setCookie } from 'cookies-next'
import type { PropsWithChildren } from 'react'
import { useCallback, useState } from 'react'
import "animate.css/animate.min.css";

export const ThemeProvider: React.FC<
  PropsWithChildren & {
    theme: ColorScheme
  }
> = ({ children, theme }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(theme ?? 'dark')
  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
      setColorScheme(nextColorScheme)
      setCookie('theme', nextColorScheme, {
        maxAge: 60 * 60 * 24 * 30,
      })
    },
    [colorScheme]
  )

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
              <UIProvider
                    withNormalizeCSS withGlobalStyles
        theme={{
          colorScheme:"light",
          defaultGradient: { from: 'indigo', to: 'cyan' },
          fontSizes: {
            md: '0.85rem',
          },
          cursorType: 'pointer',
          components: {
            Button: {
              variants: {},
            },
          },
        }}
      >
        {children}
        {/* <Notifications autoClose={4000} containerWidth={320} /> */}
      </UIProvider>
    </ColorSchemeProvider>
  )
}
