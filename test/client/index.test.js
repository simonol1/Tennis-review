import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../client/components/Home'

import App from '../client/components/App'

test('<Home />', t => {
  const wrapper = shallow(<Home/>)
  t.is(wrapper.contains(<h1>Review my Tennis Match</h1>), true,'displays heading')
  t.is(wrapper.find('.home'),true, 'has content div')
  t.end()
})
