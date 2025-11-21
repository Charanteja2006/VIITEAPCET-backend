// prisma.config.ts
import { defineConfig, env } from 'prisma/config'
import 'dotenv/config' // load .env if you want automatic loading

type Env = {
  DATABASE_URL: string
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/migrations' },
  datasource: { url: env<Env>('DATABASE_URL') },
})
