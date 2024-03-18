import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loginUrl = "http://127.0.0.1:8000/api/login/";

const initialState = {
  authTokens: localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null,
  isLoading: true,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/getTokens",
  async (credentials, { rejectWithValue }) => {
    if (credentials.email === "" || credentials.password === "") {
      return rejectWithValue("Input fields cannot be empty");
    }
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        return rejectWithValue("Invalid credentials");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const access = action.payload.tokens.access;
        state.authTokens = access;
        localStorage.setItem("tokens", JSON.stringify(access));
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default authSlice.reducer;
