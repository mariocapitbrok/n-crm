
# Using @next-auth/prisma-adapter with NextAuth.js and Prisma

## Introduction

The `@next-auth/prisma-adapter` package is used as an adapter for integrating NextAuth.js with Prisma, an ORM (Object-Relational Mapping) tool. This adapter allows you to store and manage NextAuth.js user accounts and sessions in a database managed by Prisma.

## What it Does

1. **Database Integration**: It provides the necessary functions to create, read, update, and delete user and session data in a Prisma-managed database.

2. **Schema Compatibility**: It ensures that the database schema used by Prisma is compatible with the requirements of NextAuth.js. This typically involves defining models for users, accounts, sessions, and other related entities.

3. **Simplified Configuration**: By using this adapter, you can avoid writing custom database logic for authentication, as the adapter handles these operations according to the NextAuth.js specification.

## How to Use

### 1. Install Dependencies

```sh
pnpm add next-auth @next-auth/prisma-adapter @prisma/client
```

### 2. Define Prisma Schema

Define your models in the `prisma/schema.prisma` file:

```prisma
model User {
  id            Int       @id @default(autoincrement())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model Account {
  id                Int       @id @default(autoincrement())
  userId            Int
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id])

  @@unique([provider, providerAccountId])
}

model Session {
  id           Int       @id @default(autoincrement())
  sessionToken String    @unique
  userId       Int
  expires      DateTime

  user User @relation(fields: [userId], references: [id])
}
```

### 3. Configure NextAuth.js

Configure NextAuth.js to use the Prisma adapter in your `[...nextauth].ts` or `[...nextauth].js` file:

```ts
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  // Additional NextAuth.js configuration
})
```

By using `@next-auth/prisma-adapter`, you leverage the power of Prisma to manage your database while seamlessly integrating with NextAuth.js for authentication purposes.
