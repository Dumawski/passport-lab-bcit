const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    gitHubId: null,
    role: "admin",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    gitHubId: null,
    role: "user",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    gitHubId: null,
    role: "user",
  },
];

const userModel = {


  findOne: (email: string) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },

  findById: (id: number) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  createUser: (name: string, gitHubId? : number | null) => {
    const newUser = {
      id: database.length + 1,
      name: name,
      email: "",
      password: "",
      gitHubId: gitHubId,
      role: 'user '
    };
    return newUser;
  },
  
  //fing by github id
  findByGitHubId: (gitHubId: number) => {
    const user = database.find((user) => user.gitHubId === gitHubId);
    if (user) {
        return user;
    }
    throw new Error(`Couldn't find user with GitHub ID: ${gitHubId}`);
  },
};



export { database, userModel };
