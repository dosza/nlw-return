# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

FROM node:lts

# Use production node environment by default.
ENV NODE_ENV production
WORKDIR /server
COPY  . . 
RUN npm install typescript -Dg

RUN npm run build 
EXPOSE 3000
CMD ["npm","migrateProd"]
CMD [ "npm", "start"]