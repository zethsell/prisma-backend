import './config/module-alias'
import { env } from '@/main/config/env'
import 'reflect-metadata'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

prisma.$connect()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)

// prisma.user.findMany({
//
// }).then((r) => console.log(r))
//
// prisma.user.count().then((r) => console.log(r))
//
// prisma.user.create({
//   data: {
//     email: 'teste123@mail.com',
//     name: 'Marcos'
//   }
// })
//
//
// id 'cd_usuario'
//
// @Column({ name: 'cd_usuario' })
// id!: number
