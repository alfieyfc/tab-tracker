import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'alfie.c.dev@local.test.com'
//   password: 'P@ssw0rd'
// })
