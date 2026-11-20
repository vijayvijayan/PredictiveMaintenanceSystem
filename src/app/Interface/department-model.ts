import { userModel } from "./user-model";

export interface departmentModel{
    id:number;
    departmentName?:string;
    activeFlag?:boolean;
    createdDate?:Date;
    createdBy?:string;
    applicationUser?:userModel;
}