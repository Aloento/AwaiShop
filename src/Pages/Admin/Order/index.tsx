import { Button, DataGridCell, DataGridHeaderCell, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { IHistoryItem } from "~/Pages/History";
import { HistoryColumns } from "~/Pages/History/HistoryColumns";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminOrderEdit } from "./Edit";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const useStyles = makeStyles({
  two: {
    flexBasis: "2.5%",
    flexGrow: 0
  },
  twoc: {
    flexBasis: "2.5%",
    flexGrow: 0,
    justifyContent: "center"
  }
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IHistoryItem>[] = [
  ...HistoryColumns.slice(0, -1),
  createTableColumn<IHistoryItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell className={useStyles().two}>
          Action
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      const [open, { toggle }] = useBoolean();

      return (
        <DataGridCell className={useStyles().twoc}>
          <Button
            appearance="subtle"
            icon={<OpenRegular />}
            onClick={toggle}
          />

          <AdminOrderEdit Open={open} Toggle={toggle} />
        </DataGridCell>
      )
    },
  })
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AdminOrder() {
  const { data } = useRequest(AdminHub.Order.Get.List);

  return (
    <DelegateDataGrid Items={data || []} Columns={columns} />
  )
}
