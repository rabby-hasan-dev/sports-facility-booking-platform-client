
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { logOut, setUser } from '../features/auth/authSlice';
import { toast } from 'sonner';


const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API_LINK}/api`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        const token = (getState() as RootState).auth.token;


        if (token) {
            headers.set("Authorization", `Bearer ${token}`)

        }


        return headers;


    }

})

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (arg, api, extraOptions): Promise<any> => {
    let result = await baseQuery(arg, api, extraOptions);

    // console.log('base api inside ==>', result)

    if (result.error?.status === 404) {
        toast.error(result.error.data.message)


    }

    if (result.error?.status === 403) {
        toast.error(result.error.data.message)
    }
    if (result.error?.status === 401) {
        // send Refresh Token
        const res = await fetch(`${import.meta.env.VITE_SERVER_API_LINK}/api/auth/refresh-token`, {
            credentials: "include",
            method: "POST",
        });
        const data = await res.json();

        console.log('retrive refresh token', data);

        if (data?.data?.accessToken) {

            const user = (api.getState() as RootState).auth.user;

            api.dispatch(setUser({
                user,
                token: data.data.accessToken
            }))

            result = await baseQuery(arg, api, extraOptions);
        } else {
            api.dispatch(logOut())
        }

    }
    return result;
}






export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['facility', 'bookings'],
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),

})


