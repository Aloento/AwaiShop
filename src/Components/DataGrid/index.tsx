import { DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, SkeletonItem, TableRowId } from "@fluentui/react-components";
import { IDataGrid } from "./Delegate";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.2
 */
export function DefaultDataGrid<T extends { Id: TableRowId; }>({ Items, Columns, NoHeader }: IDataGrid<T>) {
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
          <DataGridRow>
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell>
                {renderHeaderCell()}
              </DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
      }

      <DataGridBody<T>>
        {({ item, rowId }) => (
          <DataGridRow<T> key={rowId}>
            {({ renderCell }) => (
              <DataGridCell>
                {renderCell(item)}
              </DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>

      {!has && <SkeletonItem size={48} />}
    </DataGrid>
  )
}
