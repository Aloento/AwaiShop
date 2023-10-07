import { Button, DataGridCell, DataGridHeaderCell, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, TableColumnDefinition, createTableColumn, makeStyles, tokens } from "@fluentui/react-components";
import { AddRegular, DeleteRegular, DismissRegular, EditRegular } from "@fluentui/react-icons";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { ColFlex } from "~/Helpers/Styles";
import { IVariantItem } from ".";
import { AdminProductVariantName } from "./Name";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface ITypeItem {
  Id: number;
  Name: string;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalM
  },
  twelve: {
    flexBasis: "12%",
    flexGrow: 0
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<ITypeItem>[] = [
  createTableColumn<ITypeItem>({
    columnId: "Name",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Name</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Name}</DataGridCell>
    }
  }),
  createTableColumn<ITypeItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell className={useStyles().twelve}>
          Action
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().twelve}>
          <Button
            appearance="subtle"
            icon={<EditRegular />}
          />

          <Button
            appearance="subtle"
            icon={<DeleteRegular />}
          />
        </DataGridCell>
      )
    }
  })
]

const items: ITypeItem[] = [
  {
    Id: 0,
    Name: "White",
  },
  {
    Id: 1,
    Name: "Red",
  }
]

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function AdminProductVariantEdit({ Variant, Refresh }: { Variant: IVariantItem; Refresh: () => void }) {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          icon={<EditRegular />}
        />
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>
          <DialogTitle action={
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="subtle" icon={<DismissRegular />} />
            </DialogTrigger>
          }>
            Variant Detail
          </DialogTitle>

          <DialogContent className={useStyles().body}>
            <AdminProductVariantName Id={Variant.Id} Name={Variant.Name} />
            <DelegateDataGrid Items={items} Columns={columns} />
          </DialogContent>

          <DialogActions>
            <Button icon={<AddRegular />} appearance="primary">New Type</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
