'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'
import { useEffect } from 'react'

type BootstrapData = {
  distinctID: string
  featureFlags: Record<string, string | boolean>
}

export function PHProvider({
  children,
  bootstrapData,
}: {
  children: React.ReactNode
  bootstrapData: BootstrapData
}) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: '/ingest',
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
      bootstrap: {
        distinctID: bootstrapData.distinctID,
        featureFlags: bootstrapData.featureFlags,
      },
    })
  }, [])
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
