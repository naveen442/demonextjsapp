/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async()=>{
    return[
      {
        source:'/',
        destination:'/Home',
        permanent:true,
      }
    ]
  }
}

module.exports = nextConfig
