import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'atendezap-template-para-cx5hjmav',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_jGkuCT0e8z5Ec3hKNgwAeaWF72sLl6kj',
  authRequired: false,
  auth: { mode: 'managed' },
})
