FROM node:lts

# Use production node environment by default.
ENV NODE_ENV production
WORKDIR /web
COPY  . . 
RUN npm install -g typescript
RUN npm run build 
EXPOSE 4173
CMD ["npm","run","preview"]   