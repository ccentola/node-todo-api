const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllTodos = async () => {
  try {
    const allTodos = await prisma.todo.findMany({});

    return allTodos;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneTodo = async (todoId) => {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: Number(todoId) },
    });
    //
    return todo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createOneTodo = async (newTodo) => {
  const { title, user_id } = newTodo;
  try {
    const createdTodo = await prisma.todo.create({
      data: {
        title: title,
        user_id: user_id,
      },
    });
    return createdTodo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneTodo = async (todoId, changes) => {
  try {
    const todo = await prisma.todo.update({
      where: { id: Number(todoId) },
      data: {
        ...changes,
      },
    });
    //
    return todo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneTodo = async (todoId) => {
  try {
    await prisma.todo.delete({
      where: {
        id: Number(todoId),
      },
    });
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

// async function main() {
//   const todo = await prisma.todo.update({
//     where: { id: 1 },
//     data: {
//       title: 'Take toby for a walk NOW',
//     },
//   });
//
//   // await prisma.todo.create({
//   //   data: {
//   //     title: 'PLAY WITH BALL!',
//   //     user_id: 2,
//   //   },
//   // });

//   const allTodos = await prisma.todo.findMany({});
//   console.dir(allTodos, { depth: null });
//   // await prisma.users.create({
//   //   data: {
//   //     email: 'toby@dog.com',
//   //     password: 'password',
//   //   },
//   // });

//   // const allUsers = await prisma.users.findMany({});
//   // console.dir(allUsers, { depth: null });
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

module.exports = {
  getAllTodos,
  getOneTodo,
  createOneTodo,
  updateOneTodo,
  deleteOneTodo,
};
