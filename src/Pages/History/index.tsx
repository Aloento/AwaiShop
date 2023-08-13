import { Body1, Body1Strong, Button, Caption1, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Field, Image, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { ICartItem } from "~/Components/ShopCart";
import { ColFlex, Cover } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface IHistoryItem extends ICartItem {
  Status: string,
  TrackNumber: string,
  OrderDate: Date
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IHistoryItem>[] = [
  createTableColumn<IHistoryItem>({
    columnId: "Cover",
    renderHeaderCell: () => {
      return <div style={{ width: "44px" }} />;
    },
    renderCell(item) {
      return <Image
        shape="square"
        style={{
          ...Cover,
          aspectRatio: "1",
          height: "50px",
          marginTop: tokens.spacingVerticalXS,
          marginBottom: tokens.spacingVerticalXS,
        }}
        src={item.Image}
      />
    },
  }),
  createTableColumn<IHistoryItem>({
    columnId: "Product",
    renderHeaderCell: () => {
      return "Product";
    },
    renderCell(item) {
      return (
        <div style={ColFlex}>
          <Body1Strong>{item.Name}</Body1Strong>
          <Caption1>{item.Type}</Caption1>
        </div>
      )
    }
  }),
  createTableColumn<IHistoryItem>({
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
  createTableColumn<IHistoryItem>({
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
  createTableColumn<IHistoryItem>({
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
  createTableColumn<IHistoryItem>({
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
  }),
  createTableColumn<IHistoryItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return "Refund";
    },
    renderCell(item) {
      return <Button appearance="subtle" icon={<DeleteRegular />} />
    },
  })
]

const items: IHistoryItem[] = [
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
export function History() {
  return (
    <div>
      <DataGrid
        items={items}
        columns={columns}
        getRowId={(item: ICartItem) => item.Id}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ columnId, renderHeaderCell }) => (
              <DataGridHeaderCell style={{
                flexBasis: "unset",
                flexGrow: columnId === "Product" ? 1 : 0
              }}>
                {renderHeaderCell()}
              </DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>

        <DataGridBody<ICartItem>>
          {({ item, rowId }) => (
            <DataGridRow<ICartItem> key={rowId}>
              {({ columnId, renderCell }) => (
                <DataGridCell style={{
                  flexBasis: "unset",
                  flexGrow: columnId === "Product" ? 1 : 0
                }}>
                  {renderCell(item)}
                </DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>

    </div>
  )
}
