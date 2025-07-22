/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.a24.com', 
              port: '',
              //pathname: '/p/**',
            },
            {
              protocol: 'https',
              hostname: 'media.diariouno.com.ar',
              port: '',
              //pathname: '/p/**',
            },
            {
                protocol: 'https',
                hostname: 'api.diariouno.com.ar',
                port: '',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '**',
              },
          ],
    },
}

module.exports = nextConfig
