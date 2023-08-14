import { Body1, Body1Strong, Button, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Field, Image, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { ICartItem } from "~/Components/ShopCart";
import { Cover } from "~/Helpers/Styles";

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
      return (
        <DataGridHeaderCell style={{ flexBasis: "unset", flexGrow: "unset" }}>
          <div style={{ width: "50px" }} />
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return <Image
        shape="square"
        style={{
          ...Cover,
          aspectRatio: "1",
          width: "50px",
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
      return <Body1Strong>{item.Name}</Body1Strong>
    }
  }),
  createTableColumn<IHistoryItem>({
    columnId: "Type",
    renderHeaderCell: () => {
      return "Type";
    },
    renderCell(item) {
      return item.Type
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
      return "Action";
    },
    renderCell(item) {
      return <Button
        appearance="subtle"
        icon={<DeleteRegular />}
        style={{
          minWidth: "3em"
        }}
      />
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
            {({ renderHeaderCell }) => renderHeaderCell()}
          </DataGridRow>
        </DataGridHeader>

        <DataGridBody<ICartItem>>
          {({ item, rowId }) => (
            <DataGridRow<ICartItem> key={rowId}>
              {({ columnId, renderCell }) => (
                <DataGridCell style={
                  columnId === "Cover" || columnId === "Action" ? {
                    flexBasis: "unset",
                    flexGrow: "unset",
                  } : undefined}
                >
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
