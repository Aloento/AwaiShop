import { Body1, Button, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Field, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { ColFlex, Flex } from "~/Helpers/Styles";

interface IUserItem {
  Name: string,
  Email: string,
  Phone: string,
  Address: string,
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IUserItem>[] = [

  createTableColumn<IUserItem>({
    columnId: "UserName",
    renderHeaderCell: () => {
      return "User Name";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Name}>
          <Body1>{item.Name}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IUserItem>({
    columnId: "Email",
    renderHeaderCell: () => {
      return "E-Mail";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Email}>
          <Body1>{item.Email}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IUserItem>({
    columnId: "Phone",
    renderHeaderCell: () => {
      return "Phone";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Phone}>
          <Body1>{item.Phone}</Body1>
        </Field>
      )
    }
  }),
  createTableColumn<IUserItem>({
    columnId: "Address",
    renderHeaderCell: () => {
      return "Address";
    },
    renderCell(item) {
      return (
        <Field defaultValue={item.Address}>
          <Body1>{item.Address}</Body1>
        </Field>
      )
    }
  }),

  createTableColumn<IUserItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return "Delete";
    },
    renderCell(item) {
      return <Button appearance="subtle" icon={<DeleteRegular />} />
    },
  })
]

const items: IUserItem[] = [
  {
    Name: "Aloento",
    Phone: "12342342",
    Email: "user@example.com",
    Address: "Test Address"
  },
  {
    Name: "Aloento",
    Phone: "12342342",
    Email: "user@example.com",
    Address: "Test Address"
  },
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminUser() {
  return (
    <div style={{
      ...ColFlex,
      rowGap: tokens.spacingVerticalS
    }}>
      <div style={{
        ...Flex,
        justifyContent: "right"
      }}>
        <Button>Add New User</Button>
      </div>
      <DataGrid
        items={items}
        columns={columns}
        getRowId={(item: IUserItem) => item.Name}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ columnId, renderHeaderCell }) => (
              <DataGridHeaderCell style={{
                flexBasis: "unset",
                flexGrow: 0
              }}>
                {renderHeaderCell()}
              </DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>

        <DataGridBody<IUserItem>>
          {({ item, rowId }) => (
            <DataGridRow<IUserItem> key={rowId}>
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