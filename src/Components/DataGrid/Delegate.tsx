import { DataGrid, DataGridBody, DataGridHeader, DataGridRow, SkeletonItem, TableColumnDefinition, TableRowId } from "@fluentui/react-components";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.1
 */
export interface IDataGrid<T extends { Id: TableRowId; }> {
  Items: T[] | undefined;
  Columns: TableColumnDefinition<T>[];
  NoHeader?: true;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.2
 */
export function DelegateDataGrid<T extends { Id: TableRowId; }>({ Items, Columns, NoHeader }: IDataGrid<T>) {
  const has = Items?.length;

  return (
    <DataGrid
      items={has ? Items : []}
      columns={Columns}
      getRowId={(item: T) => item.Id}
    >
      {
        !NoHeader &&
        <DataGridHeader>
          <DataGridRow<T>>
            {({ renderHeaderCell }) => renderHeaderCell()}
          </DataGridRow>
        </DataGridHeader>
      }

      <DataGridBody<T>>
        {({ item, rowId }) => (
          <DataGridRow<T> key={rowId}>
            {({ renderCell }) => renderCell(item)}
          </DataGridRow>
        )}
      </DataGridBody>

      {!has && <SkeletonItem size={48} />}
    </DataGrid>
  );
}
