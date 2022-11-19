const arrayUsers = [
  {
    nome: "Luiza Silva",
    ativo: true,
  },
  {
    nome: "Ricardo Diniz",
    ativo: false,
  },
];

const userResolvers = {
  Query:  {
    users: (_, args) => {
      return arrayUsers
    },
    firstUser: () => arrayUsers[0]
  }
};

module.exports = userResolvers;