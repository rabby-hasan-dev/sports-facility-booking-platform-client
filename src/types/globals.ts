import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";


export type TError = {
    data: {
        errorMessages:[any]
        message: string;
        stack: string | null;
        success: boolean;
    };
    status: number;
}


export type TMeta = {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;


export type TQueryParams = {
    name: string;
    value: boolean | React.Key
}