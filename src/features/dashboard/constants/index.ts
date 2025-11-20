import { type MenuItemProps } from '@/features/dashboard/components/MenuItem';

export const WORKING_CAPITAL_CHART_LINES = [
  { dataKey: 'income', stroke: '#29A073', name: 'Income' },
  { dataKey: 'expense', stroke: '#C8EE44', name: 'Expenses' },
];

export const MENU_ITEMS: MenuItemProps[] = [
  { title: 'Dashboard', icon: 'Dashboard20', to: '/dashboard' },
  { title: 'Transactions', icon: 'Transactions20', to: '/transactions' },
  { title: 'Invoices', icon: 'Invoices20', to: '/invoices' },
  { title: 'My Wallets', icon: 'WalletOpened20', to: '/my-wallets' },
  { title: 'Settings', icon: 'Settings20', to: '/settings' },
];

export const FOOTER_MENU_ITEMS: MenuItemProps[] = [
  { title: 'Help', icon: 'Help20', to: '#help' },
  { title: 'Logout', icon: 'Logout20', to: '/auth/sign-out' },
];
