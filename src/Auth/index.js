import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { getAuthToken, setAuthToken } from '../utils/authToken'
import toast from '../utils/toast'

import PageLoader from '../components/PageLoader'

const Auth = () => {
    const history = useHistory()

    useEffect(() => {
        const createGuestAccount = async () => {
            try {
                const authToken = 1;
                setAuthToken(authToken)
                history.push('/')
            } catch (error) {
                toast.error(error)
            }
        }
        // 本地没有token就设置token
        if (!getAuthToken()) {
            createGuestAccount()
        }
    }, [history])

    return <PageLoader />
}

export default Auth;
