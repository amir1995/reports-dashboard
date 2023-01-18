import '@/styles/globals.css';

import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { getUsers } from '@/services/getUsers';
import { TUserData } from '@/types/types/serviceCallTypes';

interface AppProp extends AppProps {
  userData: TUserData;
}

function MyApp(props: AppProp) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['usersList'], getUsers);

  return {
    ...ctx,
    pageProps: {
      ...ctx.pageProps,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyApp;
