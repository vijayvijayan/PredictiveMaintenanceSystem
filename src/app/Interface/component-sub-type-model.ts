import { userModel } from "./user-model";

export interface componentSubTypeModel{
    id:number;
    componentSubTypeName?:string;
    componentTypeId?:number;
    activeFlag?:boolean;
    createdDate?:Date;
    createdBy?:string;
    applicationUser?:userModel;
}