import React from 'react';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: React.ReactNode;
  accessor: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  /** Row density */
  density?: 'compact' | 'comfortable';
  /** Caption for accessibility */
  caption?: string;
  /** Called with column key and direction when sorted */
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  /** Currently sorted column */
  sortKey?: string;
  /** Current sort direction */
  sortDirection?: 'asc' | 'desc';
  /** Function to get unique key for each row */
  getRowKey?: (row: T, index: number) => string | number;
  className?: string;
  style?: React.CSSProperties;
}

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  density = 'comfortable',
  caption,
  onSort,
  sortKey,
  sortDirection = 'asc',
  getRowKey,
  className,
  style,
}: TableProps<T>) {
  const cellPadding = density === 'compact'
    ? 'var(--space-2) var(--space-4)'
    : 'var(--space-4) var(--space-6)';

  const handleSort = (col: TableColumn<T>) => {
    if (!col.sortable || !onSort) return;
    const newDir =
      sortKey === col.key && sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(col.key, newDir);
  };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        overflowX: 'auto',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-default)',
        ...style,
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--text-primary)',
        }}
      >
        {caption && (
          <caption
            style={{
              captionSide: 'bottom',
              padding: 'var(--space-3)',
              color: 'var(--text-secondary)',
              fontSize: '0.8125rem',
              textAlign: 'left',
            }}
          >
            {caption}
          </caption>
        )}

        <thead>
          <tr>
            {columns.map((col) => {
              const isSorted = sortKey === col.key;
              return (
                <th
                  key={col.key}
                  scope="col"
                  aria-sort={
                    isSorted
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : col.sortable
                      ? 'none'
                      : undefined
                  }
                  onClick={() => handleSort(col)}
                  style={{
                    padding: cellPadding,
                    background: 'var(--surface-raised)',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--border-default)',
                    cursor: col.sortable ? 'pointer' : 'default',
                    whiteSpace: 'nowrap',
                    userSelect: 'none',
                    width: col.width,
                    transition: 'color var(--duration-medium) var(--ease-kendo)',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    {col.header}
                    {col.sortable && (
                      <span
                        aria-hidden="true"
                        style={{
                          opacity: isSorted ? 1 : 0.3,
                          fontSize: '0.625rem',
                          lineHeight: 1,
                          transform: isSorted && sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
                          transition: 'transform var(--duration-medium) var(--ease-kendo)',
                        }}
                      >
                        ▲
                      </span>
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => {
            const rowKey = getRowKey ? getRowKey(row, rowIndex) : rowIndex;
            const isEven = rowIndex % 2 === 0;
            return (
              <tr
                key={rowKey}
                style={{
                  background: isEven ? 'var(--surface-base)' : 'var(--surface-raised)',
                  transition: 'background 150ms var(--ease-kendo)',
                }}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    style={{
                      padding: cellPadding,
                      borderBottom: '1px solid var(--border-default)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            );
          })}
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                style={{
                  padding: 'var(--space-xl)',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}
              >
                No data to display
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; }
        }
        th:hover {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}

Table.displayName = 'Table';
