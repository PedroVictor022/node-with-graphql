const arrayUsers = [
   {
      name: 'Luiz',
      active: true,
      email: 'luiz@teste.com'
   },
   {
      name: 'Borges',
      active: false,
      email: 'borges23@teste.com'
   }
]

const userResolvers = {
   Query: {
      users: () => arrayUsers,
      primeiroUser: () => arrayUsers[0],
      allEmails: () => arrayUsers.filter(item => item.email)
   }
}

module.exports = userResolvers;