import React       from 'react'

import { Layout }  from '@ui/layout'
import { Row }     from '@ui/layout'
import Catalog     from '@site/catalog-fragment'
import Filters     from '@site/filters-fragment'
import Footer      from '@site/footer-fragment'
import Navigation  from '@site/navigation-fragment'
import Specialists from '@site/specialists-fragment'

import messages    from './messages'

export const SpecialistsPage = ({ intl, activeCategory, selectCategory }) => (
  <>
    <Navigation />
    <Catalog />
    <Layout justifyContent='center'>
      <Row maxWidth={1200} px={[20, 20, 40]} pt={40} boxSizing='border-box'>
        <Layout flexGrow={1} overflow='hidden'>
          <Specialists activeCategory={activeCategory} />
        </Layout>
        <Layout flexBasis={[0, 23]} flexShrink={0} />
        <Layout flexBasis={[210, 210, 256]} display={['none', 'flex']} flexShrink={0}>
          <Filters
            title={intl.formatMessage(messages.filterTitle)}
            activeCategory={activeCategory}
            selectCategory={selectCategory}
            check
          />
        </Layout>
      </Row>
    </Layout>
    <Footer />
  </>
)
