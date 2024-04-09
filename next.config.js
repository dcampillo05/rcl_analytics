// import { sources } from 'next/dist/compiled/webpack/webpack';

const dotenv = require('dotenv');

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {

    // async redirects(){
    //     return[
    //         {
    //             source: '/portfolio',
    //             destination: '/src/app/router/portfolio.tsx',
    //             permanent: true,
    //         }
    //     ]
    // }

};

module.exports = {
    ...nextConfig,
    env: {
        EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID,
        EMAILJS_TEMPLATEID: process.env.EMAILJS_TEMPLATEID,
        EMAILJS_USERID: process.env.EMAILJS_USERID,
    }
}


