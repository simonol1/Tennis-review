import React from 'react'
import test from 'ava'
import { shallow, mount} from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('The header renders correctly', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('h1').text(),'Review my Tennis Match')
})
