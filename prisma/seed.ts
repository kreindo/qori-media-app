import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const USERS_TO_CREATE = 20;
const POSTS_MIN = 1;
const POSTS_MAX = 20;

async function run() {
  const userData = Array(USERS_TO_CREATE)
    .fill(null)
    .map(() => {
      return {
        name: faker.internet.userName().toLowerCase(),
        email: faker.internet.email().toLocaleLowerCase(),
        image: faker.image.avatar(),
      };
    });

  const createUsers = userData.map((user) =>
    prisma.user.create({ data: user })
  );

  const users = await prisma.$transaction(createUsers);

  const posts = [];

  for (let i = 0; i < users.length; i++) {
    const amount = faker.datatype.number({ min: POSTS_MIN, max: POSTS_MAX });

    for (let ii = 0; ii < amount; ii++) {
      posts.push({
        text: faker.lorem.sentence(),
        author: {
          connect: {
            id: users[ii]?.id,
          },
        },
      });
    }
  }

  const createPosts = posts.map((post) => prisma.post.create({ data: post }));

  await prisma.$transaction(createPosts);

  await prisma.$disconnect();
}

run();
