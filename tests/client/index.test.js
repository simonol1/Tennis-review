import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../client/components/Home'

App.prototype.componentDidMount = () => {}

import * as api from '../../client/api'

// test('Display heading', t => {
//   const wrapper = shallow(<Home />)
//   t.is(wrapper.contains(<h1>Review my Tennis Match</h1>), true,'displays heading')
//   t.is(wrapper.find('.home'),true, 'has content div')
//   t.end()
// })
test('<Home />', t => {
  const wrapper = shallow(<Home />)
  t.is(wrapper.find('h1').text(),'Review my Tennis Match')
})
