import { Body1Strong, Button, DataGridCell, DataGridHeaderCell, TableColumnDefinition, createTableColumn } from "@fluentui/react-components";
import { OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { CoverCol } from "~/Helpers/CoverCol";
import { AdminHub } from "~/ShopNet/Admin";
import { DelegateDataGrid } from "../../../Components/DataGrid/Delegate";
import { AdminProductEdit } from "./Edit";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export interface IProductItem {
  Id: number;
  Cover: string;
  Name: string;
  Category: string;
  Variant: number;
  Type: number;
  Stock: number;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IProductItem>[] = [
  CoverCol,
  createTableColumn<IProductItem>({
    columnId: "Product",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Product</DataGridHeaderCell>
    },
    renderCell(item) {
      return (
        <DataGridCell>
          <Body1Strong>{item.Name}</Body1Strong>
        </DataGridCell>
      )
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Category",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Category</DataGridHeaderCell>
    },
    renderCell(item) {
      return (
        <DataGridCell>
          <Body1Strong>{item.Category}</Body1Strong>
        </DataGridCell>
      )
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Variant",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Variant</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Variant}</DataGridCell>
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Type",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Type</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Type}</DataGridCell>
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Stock",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Stock</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Stock}</DataGridCell>
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell style={{ flexBasis: "2.5%", flexGrow: 0 }}>
          Detail
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      const [open, { toggle }] = useBoolean();

      return (
        <DataGridCell style={{ flexBasis: "2.5%", flexGrow: 0, justifyContent: "center" }}>
          <Button
            appearance="subtle"
            icon={<OpenRegular />}
            onClick={toggle}
          />

          <AdminProductEdit Open={open} Toggle={toggle} />
        </DataGridCell>
      )
    },
  })
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminProduct() {
  const { data } = useRequest(AdminHub.Product.Get.List);

  return (
    <DelegateDataGrid Items={data || []} Columns={columns} />
  )
}
