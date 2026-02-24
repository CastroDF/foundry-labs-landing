import { PostHog } from 'posthog-node'
import { cookies } from 'next/headers'
import { uuidv7 } from 'uuidv7'

export async function getBootstrapData() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY!
  const cookieName = `ph_${key}_posthog`
  const cookieStore = await cookies()
  const phCookie = cookieStore.get(cookieName)

  const distinct_id = phCookie
    ? JSON.parse(phCookie.value).distinct_id
    : uuidv7()

  const client = new PostHog(key, { host: process.env.NEXT_PUBLIC_POSTHOG_HOST })
  const flags = await client.getAllFlags(distinct_id)
  await client.shutdown()

  return { distinctID: distinct_id, featureFlags: flags }
}
