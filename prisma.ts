import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const create_user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(create_user)

  const find_user = await prisma.user.findMany()
  console.log(find_user)
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
