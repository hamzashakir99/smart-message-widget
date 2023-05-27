import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SmartMessage } from '../index'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <SmartMessage domain={'abc.com'} token={'working'} showError={false} welcomeMessage={'Welcome to Our Website'} />,
    )
  })
})
