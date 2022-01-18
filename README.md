# myblog
- Using WordPress as a Head-less CMS to import articles. Once an article posted on WordPress, It automatically deploys to CDN server to deliver the article.
- Running on Netlify but There are no edge server in Japan. Hence, I am planning to migrate to another CDN server due to considering late response time.
- Blog images are automatically depressed once the image uploaded on WordPress and It will be stored in AWS S3 and loaded via CloudFront.
- Need a continuous updating such as gatsby-v1 to v2.
