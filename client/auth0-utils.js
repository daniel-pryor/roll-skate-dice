import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'

import { updateLoggedInUser } from './actions/loggedInUser'

export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((s) => Boolean(s.loggedInUser?.token))

  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      getAccessTokenSilently()
        .then((token) => {
          const userToSave = {
            auth0Id: user?.sub,
            email: user?.email,
            token: token,
          }
          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((err) => {
          console.log('err', err)
        })
    } catch (err) {
      console.error(err)
    }
  }
}
