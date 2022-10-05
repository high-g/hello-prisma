import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })
  // console.log(user)

  // const user = await prisma.user.findMany()
  // console.log(user)

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     posts: {
  //       create: {
  //         title: 'Hello World',
  //       },
  //     },
  //   },
  // })

  // console.log(user)

  const result = await prisma.user.findMany()
  console.log('result', result)

  const result2 = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(result2, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
