import {baseUrl} from "@/config";
import {IUserData} from "@/types/interface/serviceCallInterface";
import apiClient from "@/utils/apiClient";

export const getUsers = async () => {
  return await apiClient<IUserData>({
    url: `${baseUrl}users`,
    method: 'get',
  })
    .then(r => {
      return r.data
    })
    .catch(() => {})
}
