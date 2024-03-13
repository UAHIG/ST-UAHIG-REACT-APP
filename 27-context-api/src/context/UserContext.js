import { createContext } from "react";

const UserContext = createContext({
  user: '',
  changeUserName: () => {},
})

export default UserContext