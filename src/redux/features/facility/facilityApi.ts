import { baseApi } from "../../api/baseApi";


const facilityApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getAllFacility: builder.query({
            query: () => ({
                url: "/facility",
                method: "GET",

            }),
            providesTags: ['facility']

        }),

        createFacility: builder.mutation({
            query: (data) => ({
                url: "/facility",
                method: "POST",
                body: data,

            }),
            invalidatesTags: ['facility']
        }),
        updateFacility: builder.mutation({
            query: (args) => {

                return {
                    url: `/facility/${args.id}`,
                    method: "PUT",
                    body: args.data,
                }

            },
            invalidatesTags: ['facility']
        }),
        deleteSingleFacility: builder.mutation({
            query: (id) => ({
                url: `/facility/${id}`,
                method: "DELETE",


            }),
            invalidatesTags: ['facility']
        })


    })
})


export const {
    useGetAllFacilityQuery,
    useCreateFacilityMutation,
    useUpdateFacilityMutation,
    useDeleteSingleFacilityMutation
} = facilityApi;