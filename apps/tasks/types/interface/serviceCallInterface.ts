import {TGatewayItem, TProjectItem, TReportsItem, TStatus, TUserData} from '@/types/types/serviceCallTypes';

export interface IUserData extends TStatus {
  data: TUserData[];
}

export interface IProjectsData extends TStatus {
  data: TProjectItem[];
}

export interface IGatewaysData extends TStatus {
  data: TGatewayItem[];
}

export interface IReportsData extends TStatus {
  data: TReportsItem[];
}
