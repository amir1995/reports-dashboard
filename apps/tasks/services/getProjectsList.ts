import {IProjectsData} from "@/types/interface/serviceCallInterface";
import apiClient from "@/utils/apiClient";

export const projectsList = () => {
  return apiClient<IProjectsData>({url: '/api/getProjectsList/', method: "get"}).then(res => {
    return res.data;
  });
}
