import { Body1Strong, Button, Caption1, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Image, Input, Label, SpinButton, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { ColFlex, Cover, Flex } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface ICartItem {
  Id: number;
  Image: string;
  Name: string;
  Type: string;
  Quantity: number;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<ICartItem>[] = [
  createTableColumn<ICartItem>({
    columnId: "Cover",
    renderHeaderCell: () => {
      return <div style={{
        width: "44px"
      }}></div>;
    },
    renderCell(item) {
      return <Image shape="square" style={{
        ...Cover,
        aspectRatio: "1",
        height: "44px"
      }} src={item.Image} />
    },
  }),
  createTableColumn<ICartItem>({
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
  createTableColumn<ICartItem>({
    columnId: "Num",
    renderHeaderCell: () => {
      return "Quantity";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Quantity}>
          <SpinButton style={{ width: "44px" }} />
        </Field>
      )
    }
  }),
  createTableColumn<ICartItem>({
    columnId: "Action",
    renderCell(item) {
      return <Button appearance="subtle" icon={<DeleteRegular />} />
    },
  })
]

const items: ICartItem[] = [
  {
    Id: 1,
    Image: "https://picsum.photos/550",
    Name: "OTC SHIRT - GREY",
    Type: "Short Sleeve, S",
    Quantity: 1
  },
  {
    Id: 2,
    Image: "https://picsum.photos/600",
    Name: "OTC Cap - Cap and Cap",
    Type: "Red, Long and Long",
    Quantity: 1
  }
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Confirm() {
  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Confirm Order</DialogTitle>
          <DialogContent>
            <div style={{
              ...ColFlex,
              rowGap: tokens.spacingVerticalXXL
            }}>
              <div style={Flex}>
                <div style={{
                  ...ColFlex,
                  flexBasis: "50%",
                  rowGap: tokens.spacingVerticalM
                }}>
                  <Field label="Name" size="large">
                    <Label>Aloento</Label>
                  </Field>
                </div>

                <div style={{
                  ...ColFlex,
                  flexBasis: "50%",
                  rowGap: tokens.spacingVerticalM
                }}>
                  <Field label="Phone" size="large">
                    <Label>Aloento</Label>
                  </Field>
                </div>
              </div>

              <Field label="Address" size="large">
                <Label>demo address</Label>
              </Field>

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
              <Field label="Comment" size="large">
                <Input />
              </Field>
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Confirm</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
