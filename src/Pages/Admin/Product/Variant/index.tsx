import { Button, DataGridCell, DataGridHeaderCell, Subtitle1, TableColumnDefinition, createTableColumn } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { DelegateDataGrid } from "~/Components/DelegateDataGrid";
import { Flex } from "~/Helpers/Styles";
import { AdminProductVariantEdit } from "./Edit";

interface IVariantItem {
  Id: number;
  Name: string;
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
        <DataGridHeaderCell style={{ flexBasis: "12%", flexGrow: "unset" }}>
          Name
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return (
        <DataGridCell style={{ flexBasis: "12%", flexGrow: "unset" }}>
          {item.Name}
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
    columnId: "Edit",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell style={{ flexBasis: "4%", flexGrow: "unset" }}>
          Edit
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return (
        <DataGridCell style={{ flexBasis: "4%", flexGrow: "unset" }}>
          <AdminProductVariantEdit />
        </DataGridCell>
      )
    }
  })
]

const items: IVariantItem[] = [
  {
    Id: 0,
    Name: "Color",
    Types: ["White", "Red"]
  }
]

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function AdminProductVariant() {
  return <>
    <div style={{
      ...Flex,
      justifyContent: "space-between"
    }}>
      <Subtitle1>Variant</Subtitle1>
      <Button appearance="primary" icon={<AddRegular />}>New Variant</Button>
    </div>

    <DelegateDataGrid Items={items} Columns={columns} />
  </>
}
