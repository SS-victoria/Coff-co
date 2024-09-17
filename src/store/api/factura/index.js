import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../../utils";


export const facturasApi = createApi({
    reducerPath: "facturas",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            token: `${getCookie("authToken")}`,
        },
    }),
    endpoints: (build) => ({
        GeneraFactura: build.mutation({
            query: (data) => ({
                url: "facturas/generar",
                method: "POST",
                body: data,
            }),
            providesTags: ["Facturas"],
        }),
    })
})



export const { useGeneraFacturaMutation } = facturasApi;