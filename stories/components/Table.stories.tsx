import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../src/components/Table';
import { Badge } from '../../src/components/Badge';
import type { TableColumn } from '../../src/components/Table';
import type { BadgeVariant } from '../../src/components/Badge';

interface Component {
  name: string;
  category: string;
  apca: string;
  status: string;
}

const data: Component[] = [
  { name: 'Button', category: 'Action', apca: 'Lc +77 / −91', status: 'Shipped' },
  { name: 'Input', category: 'Form', apca: 'Lc +99 focus', status: 'Shipped' },
  { name: 'Badge', category: 'Display', apca: 'Lc +62 (badge)', status: 'Shipped' },
  { name: 'Card', category: 'Layout', apca: 'Lc +99 body', status: 'Shipped' },
  { name: 'Nav', category: 'Navigation', apca: 'Lc −91 dark', status: 'Shipped' },
  { name: 'Modal', category: 'Overlay', apca: 'Lc +99 body', status: 'Shipped' },
  { name: 'Toast', category: 'Feedback', apca: 'Lc −91 on bg', status: 'Shipped' },
];

const statusVariant: Record<string, BadgeVariant> = {
  Shipped: 'success',
  'In progress': 'warning',
  Planned: 'primary',
};

const columns: TableColumn<Component>[] = [
  {
    key: 'name',
    header: 'Component',
    accessor: (row) => (
      <span style={{ fontWeight: 500 }}>{row.name}</span>
    ),
    sortable: true,
  },
  {
    key: 'category',
    header: 'Category',
    accessor: (row) => row.category,
    sortable: true,
  },
  {
    key: 'apca',
    header: 'APCA',
    accessor: (row) => (
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>{row.apca}</span>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    accessor: (row) => (
      <Badge variant={statusVariant[row.status] ?? 'primary'}>{row.status}</Badge>
    ),
  },
];

const meta: Meta = {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Striped rows (alternating shironeri/washi). Sortable column headers with indicator. Compact and comfortable density variants.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => {
    const [sortKey, setSortKey] = React.useState<string | undefined>();
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');

    const sortedData = [...data].sort((a, b) => {
      if (!sortKey) return 0;
      const aVal = a[sortKey as keyof Component];
      const bVal = b[sortKey as keyof Component];
      const cmp = aVal.localeCompare(bVal);
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return (
      <Table
        columns={columns}
        data={sortedData}
        caption="Zanshin component registry"
        sortKey={sortKey}
        sortDirection={sortDir}
        onSort={(key, dir) => { setSortKey(key); setSortDir(dir); }}
        getRowKey={(row) => row.name}
      />
    );
  },
};

export const CompactDensity: Story = {
  render: () => (
    <Table
      columns={columns}
      data={data}
      density="compact"
      getRowKey={(row) => row.name}
      caption="Compact density — less padding per row"
    />
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table columns={columns} data={[]} caption="No components found" />
  ),
};
