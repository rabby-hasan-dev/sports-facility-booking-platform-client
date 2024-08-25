import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,

            })
        }),
        
        signup: builder.mutation({
            query: (data) => ({
                url: "/auth/signup",
                method: "POST",
                body: data,

            })
        })


    })
})



export const {useLoginMutation, useSignupMutation}=authApi;