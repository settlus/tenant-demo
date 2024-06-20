##### BUILDER
FROM public.ecr.aws/docker/library/node:18-slim AS builder

WORKDIR /app

COPY ./src ./src
COPY ./public ./public
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./vite.config.ts ./
COPY ./tsconfig.json ./
COPY ./tsconfig.node.json ./
COPY ./index.html ./

RUN yarn global add pnpm && \
    pnpm i && pnpm build

##### RUNNER
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
#FROM public.ecr.aws/docker/library/node:18-slim AS runner
#WORKDIR /app

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 demo

# COPY --from=builder --chown=demo:nodejs /app/dist ./dist
# COPY --from=builder --chown=demo:nodejs /app/node_modules ./node_modules
# COPY --from=builder --chown=demo:nodejs /app/package.json ./package.json
# COPY --from=builder --chown=demo:nodejs /app/pnpm-lock.yaml ./pnpm-lock.yaml

# USER demo

COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
