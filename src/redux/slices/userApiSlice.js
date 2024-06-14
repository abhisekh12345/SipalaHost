import { apiSlice } from "./apiSlice";
import { SIGNUP,SIGNIN } from "../constraints/contraint";


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        signup : builder.mutation({
            query: (data) => ({
              url : `${SIGNUP}`,
              method : 'POST',
              body : data,
            }),
        }),
        signin : builder.mutation({
            query: (data) => ({
              url : `${SIGNIN}`,
              method : 'POST',
              body : data,
            }),
        }),

    })
})


export const {
   useSignupMutation,
   useSigninMutation,
} = usersApiSlice