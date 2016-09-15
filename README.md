Just run `npm install` then `npm run start`.

In the gulpfile we have a list of URLs. The code is simple as possible, it is only a iteration in the list calling louis for each item. What is the big thing then? Actually, I had to change this gulp plugin in order to make it work with many websites. This is why the package.jon points directly to my repository and branch with the altered code. This plugin version will write different reports in different output files named with the URL of the website.
