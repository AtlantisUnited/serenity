/**
 * @jest-environment jsdom
 */

import { render }          from '@testing-library/react'
import { IntlProvider }    from 'react-intl'
import { useIntl }         from 'react-intl'
import React               from 'react'

import { ThemeProvider }   from '@ui/theme'

import { FloorsWorksheet } from '../FloorsWorksheet'

const TestComponent = () => {
  const intl = useIntl()

  return <FloorsWorksheet intl={intl} />
}

describe('Floors worksheet', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <TestComponent />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
