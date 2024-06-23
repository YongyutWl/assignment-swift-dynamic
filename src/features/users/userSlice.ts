import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interface/IUser";

const initialState: IUser = {
  title: "",
  firstname: "",
  lastname: "",
  birthday: "",
  nationality: "",
  citizenID: "",
  gender: "",
  mobilePhone: 0,
  passportNo: "",
  expectedSalary: "",
  id: "",
};

// const initialState: IUser | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
