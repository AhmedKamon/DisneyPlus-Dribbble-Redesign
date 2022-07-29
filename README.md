live link: https://disney-plus-dribbble-redesign.vercel.app/
Tailwind hide scrollber npm i tailwind-scrollbar-hide
 https://www.npmjs.com/package/tailwind-scrollbar-hide
 https://user-images.githubusercontent.com/12596485/142972957-272010d3-29f6-4be7-99e1-dd03e7a8b92b.gif
 Install the plugin from npm:

# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide

# Using pnpm
pnpm add tailwind-scrollbar-hide
Then add the plugin to your tailwind.config.js file:

// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
