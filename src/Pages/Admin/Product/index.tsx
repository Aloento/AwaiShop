import { Body1, Body1Strong, Button, DataGridCell, DataGridHeaderCell, Field, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { AddRegular, DeleteRegular } from "@fluentui/react-icons";
import { CoverCol } from "~/Helpers/CoverCol";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { DelegateDataGrid } from "../../../Components/DelegateDataGrid";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface IProductItem {
  Id: number;
  Image: string;
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
      return "Category";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Category}>
          <Body1>{item.Category}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Stock",
    renderHeaderCell: () => {
      return "Stock";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Stock}>
          <Body1>{item.Stock}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IProductItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return "Delete";
    },
    renderCell(item) {
      return <Button appearance="subtle" icon={<DeleteRegular />} />
    },
  })
]

const items: IProductItem[] = [
  {
    Id: 1,
    Image: "https://picsum.photos/550",
    Name: "OTC SHIRT - GREY",
    Category: "Clothes",
    Variant: 2,
    Type: 4,
    Stock: 10,
  },
  {
    Id: 2,
    Image: "https://picsum.photos/600",
    Name: "OTC Cap - Cap and Cap",
    Category: "Hat",
    Variant: 2,
    Type: 4,
    Stock: 20,
  }
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminProduct() {
  return (
    <div style={{
      ...ColFlex,
      rowGap: tokens.spacingVerticalS
    }}>
      <div style={{
        ...Flex,
        justifyContent: "right"
      }}>
        <Button appearance="primary" icon={<AddRegular />}>New Product</Button>
      </div>

      <DelegateDataGrid Items={items} Columns={columns} />
    </div>
  )
}
