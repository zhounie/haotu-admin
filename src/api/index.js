import { POST } from '../utils/request'

export const getUserList = (params) => POST('/api/user/get_user_list', params)