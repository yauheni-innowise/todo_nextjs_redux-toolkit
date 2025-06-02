'use client';

import { Provider } from 'react-redux';
import { store } from './store/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps): React.ReactElement {
  return <Provider store={store}>{children}</Provider>;
}
