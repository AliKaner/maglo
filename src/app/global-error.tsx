'use client';

import { gordita, kumbhSans } from '@/fonts';
import Error from '@/shared/components/Error/Error';
import { ERROR_MESSAGES } from '@/shared/constants/error.messages';
import { IGlobalError } from '@/shared/types/error/types';
import '@/styles/globals.scss';

const GlobalError = (props: IGlobalError) => {
  const { error, reset } = props;
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${gordita.variable}`}>
        <Error message={error.message || ERROR_MESSAGES.GENERIC} onRetry={reset} />
      </body>
    </html>
  );
};

export default GlobalError;
