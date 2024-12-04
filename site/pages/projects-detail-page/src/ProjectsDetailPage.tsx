import React           from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import Catalog         from '@site/catalog-fragment'
import Footer          from '@site/footer-fragment'
import Navigation      from '@site/navigation-fragment'
import ProjectCustomer from '@site/project-customer-fragment'
import ProjectReply    from '@site/project-reply-fragment'
import ProjectsDetail  from '@site/projects-detail-fragment'

export const ProjectsDetailPage = ({ intl, project = {}, id, replies }: any) => (
  <>
    <Navigation />
    <Catalog />
    <Layout justifyContent='center'>
      <Layout maxWidth={1200} px={[20, 20, 40]} pt={40} boxSizing='border-box' width='100%'>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} overflow='hidden'>
            <ProjectsDetail {...project} />
          </Layout>
          <Layout flexBasis={[0, 20, 40]} flexShrink={0} />
          <Layout flexBasis={['auto', 200, 256]} flexShrink={0}>
            <Column>
              <Layout flexBasis={120} />
              <ProjectCustomer {...(project.owner || {})} />
              <Layout flexBasis={[20, 0]} />
            </Column>
          </Layout>
        </Box>
      </Layout>
    </Layout>
    <Column>
      <Layout flexBasis={[0, 50]} />
      <ProjectReply
        id={id}
        {...replies}
        ownerName={project.owner && project.owner.profile.personalInformation}
      />
    </Column>
    <Footer />
  </>
)
