import { Button, Checkbox, TableColumnDefinition, createTableColumn } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { DefaultDataGrid } from "~/Components/DataGrid";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export interface IUserItem {
  Id: number;
  Name: string;
  Email: string;
  Admin?: boolean;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IUserItem>[] = [
  createTableColumn<IUserItem>({
    columnId: "Name",
    renderHeaderCell: () => {
      return "Real Name";
    },
    renderCell(item) {
      return item.Name;
    }
  }),
  createTableColumn<IUserItem>({
    columnId: "Email",
    renderHeaderCell: () => {
      return "E-Mail";
    },
    renderCell(item) {
      return item.Email;
    }
  }),
  createTableColumn<IUserItem>({
    columnId: "Admin",
    renderHeaderCell: () => {
      return "Admin";
    },
    renderCell(item) {
      return <Checkbox defaultChecked={item.Admin} />
    },
  }),
  createTableColumn<IUserItem>({
    columnId: "Delete",
    renderHeaderCell: () => {
      return "Delete";
    },
    renderCell(item) {
      return <Button appearance="subtle" icon={<DeleteRegular />} />
    },
  })
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AdminUser() {
  const { data } = useRequest(AdminHub.User.Get.List);

  return (
    <DefaultDataGrid Items={data || []} Columns={columns} />
  )
}
