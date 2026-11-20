import { userModel } from "./user-model";

export interface componentTypeModel{
    id:number;
    componentTypeName?:string;
    activeFlag?:boolean;
    createdDate?:Date;
    createdBy?:string;
    applicationUser?:userModel;
}