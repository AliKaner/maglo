'use client';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip as ChartTooltip,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';
import { PropsWithChildren, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import { getRetryDelay, handleAPIError, shouldRetryRequest } from '@/shared/utils/error';

import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: error => {
            const errorMessage = handleAPIError(error);
            toast.error(errorMessage);
          },
        }),
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: (failureCount, error) => {
              if (failureCount >= 3) return false;
              return shouldRetryRequest(error);
            },
            retryDelay: attemptIndex => getRetryDelay(attemptIndex),
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            throwOnError: true,
          },
          mutations: {
            retry: (failureCount, error) => {
              if (failureCount >= 2) return false;
              return shouldRetryRequest(error);
            },
            retryDelay: attemptIndex => getRetryDelay(attemptIndex),
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
