import { Body1, Body1Strong, DataGridCell, DataGridHeaderCell, Field, TableColumnDefinition, createTableColumn } from "@fluentui/react-components";
import { DelegateDataGrid } from "~/Components/DelegateDataGrid";
import { ICartItem } from "~/Components/ShopCart";
import { CoverCol } from "~/Helpers/CoverCol";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface IOrderItem extends ICartItem {
  Status: string,
  TrackNumber: string,
  OrderDate: Date
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IOrderItem>[] = [
  CoverCol,
  createTableColumn<IOrderItem>({
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
  createTableColumn<IOrderItem>({
    columnId: "Quantity",
    renderHeaderCell: () => {
      return "Quantity";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Quantity}>
          <Body1>{item.Quantity}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IOrderItem>({
    columnId: "OrderDate",
    renderHeaderCell: () => {
      return "Order Date";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.OrderDate.toDateString()}>
          <Body1>{item.OrderDate.toDateString()}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IOrderItem>({
    columnId: "TrackNumber",
    renderHeaderCell: () => {
      return "Track Number";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.TrackNumber}>
          <Body1>{item.TrackNumber}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IOrderItem>({
    columnId: "OrderState",
    renderHeaderCell: () => {
      return "Order State";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Status}>
          <Body1>{item.Status}</Body1>
        </Field>
      )
    }
  })
]

const items: IOrderItem[] = [
  {
    Id: 1,
    Image: "https://picsum.photos/550",
    Name: "OTC SHIRT - GREY",
    Type: "Short Sleeve, S",
    Quantity: 1,
    OrderDate: new Date(),
    TrackNumber: "abcd1234",
    Status: "Finished"

  },
  {
    Id: 2,
    Image: "https://picsum.photos/600",
    Name: "OTC Cap - Cap and Cap",
    Type: "Red, Long and Long",
    Quantity: 1,
    OrderDate: new Date(),
    TrackNumber: "abcd1234",
    Status: "Finished"
  }
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminOrder() {
  return (
    <DelegateDataGrid Items={items} Columns={columns} />
  )
}
