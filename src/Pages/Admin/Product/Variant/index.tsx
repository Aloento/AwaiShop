import { Button, DataGridCell, DataGridHeaderCell, Subtitle1, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { Flex } from "~/Helpers/Styles";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminProductVariantEdit } from "./Edit";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export interface IVariantItem {
  Id: string;
  Types: string[];
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IVariantItem>[] = [
  createTableColumn<IVariantItem>({
    columnId: "Name",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell style={{ flexBasis: "12%", flexGrow: 0 }}>
          Name
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return (
        <DataGridCell style={{ flexBasis: "12%", flexGrow: 0 }}>
          {item.Id}
        </DataGridCell>
      )
    }
  }),
  createTableColumn<IVariantItem>({
    columnId: "Type",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Type</DataGridHeaderCell>
    },
    renderCell(item) {
      return (
        <DataGridCell>
          {
            item.Types.reduce((prev, curr) => {
              return `${prev} ${curr} ;`
            }, "")
          }
        </DataGridCell>
      )
    }
  }),
  createTableColumn<IVariantItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell style={{ flexBasis: "7%", flexGrow: 0 }}>
          Action
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return (
        <DataGridCell style={{ flexBasis: "7%", flexGrow: 0 }}>
          <AdminProductVariantEdit />

          <Button
            appearance="subtle"
            icon={<DeleteRegular />}
          />
        </DataGridCell>
      )
    }
  })
]

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...Flex,
    justifyContent: "space-between"
  },
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function AdminProductVariant({ ProdId }: { ProdId: number }) {
  const style = useStyles();

  const { data } = useRequest(AdminHub.Product.Get.Variant, {
    defaultParams: [ProdId]
  });

  return <>
    <div className={style.body}>
      <Subtitle1>Variant</Subtitle1>
      <AdminProductVariantEdit New />
    </div>

    <DelegateDataGrid Items={data || []} Columns={columns} />
  </>
}
