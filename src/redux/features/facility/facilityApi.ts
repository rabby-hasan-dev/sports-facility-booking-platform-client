import { baseApi } from "../../api/baseApi";


const facilityApi=baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getAllFacility: builder.query({
            query: () => ({
                url: "/facility",
                method: "GET",

            })
        }),
        
        createFacility: builder.mutation({
            query: (data) => ({
                url: "/facility",
                method: "POST",
                body: data,

            })
        }),
        updateFacility: builder.mutation({
            query: (args) => ({
                url: `/facility/${args.id}`,
                method: "PUT",
                body: args.data,

            })
        }),
       deleteSingleFacility: builder.mutation({
            query: (id) => ({
                url: `/facility/${id}`,
                method: "DELETE",
               

            })
        })


    })
})


export const {
   useGetAllFacilityQuery,
    useCreateFacilityMutation,
    useUpdateFacilityMutation,
    useDeleteSingleFacilityMutation
}=facilityApi;