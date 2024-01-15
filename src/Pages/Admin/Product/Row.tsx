import { DataGridRow, TableRowData } from "@fluentui/react-components";

/**
 * @author Aloento
 * @since 1.3.0
 * @version 0.1.0
 */
export function AdminProductRow({ item, rowId }: TableRowData<number>) {
  return (
    <DataGridRow key={rowId}>
      {({ renderCell }) => renderCell(item)}
    </DataGridRow>
  );
}
