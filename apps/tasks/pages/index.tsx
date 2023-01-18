import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'ui/Layout';
import LayoutContainer from 'ui/Layout/LayoutContainer';

import { Reports } from '@/containers/Reports';
import { gatewaysList } from '@/services/getGatewaysList';
import { projectsList } from '@/services/getProjectsList';

const Index: NextPage = () => {
  const projectsQuery = useQuery(['projectsList'], () => projectsList());
  const gatewaysQuery = useQuery(['gatewaysList'], () => gatewaysList());

  return (
    <Layout>
      <Head>
        <title>Reports</title>
      </Head>
      <LayoutContainer>
        <Reports
          projectsData={projectsQuery.data}
          gatewaysData={gatewaysQuery.data}
        />
      </LayoutContainer>
    </Layout>
  );
};

export default Index;
