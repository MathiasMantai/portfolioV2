import { inject } from '@vercel/analytics';
 
export default defineNuxtPlugin(
    {
        name: 'vercel',
        async setup(nuxtApp)
        {
            inject()
        }
    }
)