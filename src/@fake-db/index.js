import mock from './mock'
import './apps/chat'
import './apps/userList'
import './jwt'

mock.onAny().passThrough()
