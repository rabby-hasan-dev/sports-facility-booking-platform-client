import { baseApi } from "../../api/baseApi";




const bookingsApi=baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getAllBookingsByAdmin: builder.query({
            query: () => ({
                url: "/bookings",
                method: "GET",

            })
        }),
        
        getAllBookingsByUser: builder.query({
            query: () => ({
                url: "/bookings/user",
                method: "GET",

            })
        }),
        
        createBookings: builder.mutation({
            query: (data) => ({
                url: "/bookings",
                method: "POST",
                body: data,

            })
        }),
       
       deleteSingleBookings: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: "DELETE",
               

            })
        }),
       bookingChecker: builder.query({
            query: (args) => ({
                url: `/check-availability`,
                method: "GET",
                params:args
               

            })
        })


    })
})


export const {
   useGetAllBookingsByAdminQuery,
   useGetAllBookingsByUserQuery,
   useCreateBookingsMutation,
   useDeleteSingleBookingsMutation,
   useBookingCheckerQuery
}=bookingsApi;