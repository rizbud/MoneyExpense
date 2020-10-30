import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

import { StartupTypes } from '../Redux/StartupRedux'

import { startup } from './StartupSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
  ])
}
