import { POST } from '../utils/request'

export const getUserList = (params) => POST('/api/user/get_user_list', params)

export const addUser = (params) => POST('/api/user/register_user', params)

export const editUser = (params) => POST('/api/user/edit_user', params)