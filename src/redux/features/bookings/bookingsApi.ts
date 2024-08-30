
import { TQueryParamsBookingsChecker } from "../../../pages/Home/Bookings/Bookings";
import { baseApi } from "../../api/baseApi";




const bookingsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getAllBookingsByAdmin: builder.query({
            query: () => ({
                url: "/bookings",
                method: "GET",

            }),
            providesTags: ['bookings']
        }),

        getAllBookingsByUser: builder.query({
            query: () => ({
                url: "/bookings/user",
                method: "GET",

            }),
            providesTags: ['bookings']
        }),

        createBookings: builder.mutation({
            query: (data) => ({
                url: "/bookings",
                method: "POST",
                body: data,

            }),
            invalidatesTags: ['bookings']
        }),

        deleteSingleBookings: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: "DELETE",


            }),
            invalidatesTags: ['bookings']
        }),
        bookingChecker: builder.query({
            query: (args) => {       
                  const params = new URLSearchParams();              
                if (args) {
                    args.forEach((item:TQueryParamsBookingsChecker ) => {
                        params.append(item.name, item.value as string)
                       
                    })
                }

               
                return {
                    url: `/check-availability`,
                    method: "GET",
                    params:params


                }
            },

        })


    })
})


export const {
    useGetAllBookingsByAdminQuery,
    useGetAllBookingsByUserQuery,
    useCreateBookingsMutation,
    useDeleteSingleBookingsMutation,
    useBookingCheckerQuery
} = bookingsApi;