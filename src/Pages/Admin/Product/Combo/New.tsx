import { Button, Combobox, DataGridCell, DataGridHeaderCell, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Label, Option, SpinButton, TableColumnDefinition, createTableColumn, tokens } from "@fluentui/react-components";
import { AddRegular, DismissRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { isInteger } from "lodash-es";
import { useState } from "react";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { Flex } from "~/Helpers/Styles";
import { AdminHub } from "~/ShopNet/Admin";
import { IVariantItem } from "../Variant";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface INewComboItem extends IVariantItem {
  Update: (type: string) => void;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<INewComboItem>[] = [
  createTableColumn<INewComboItem>({
    columnId: "Variant",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Variant</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Name}</DataGridCell>
    }
  }),
  createTableColumn<INewComboItem>({
    columnId: "Type",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Type</DataGridHeaderCell>
    },
    renderCell(item) {
      return (
        <DataGridCell>
          <Combobox onOptionSelect={(_, x) => item.Update(x.optionValue!)}>
            {
              item.Types.map((v, i) => <Option key={i}>{v}</Option>)
            }
          </Combobox>
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
export function AdminProductNewCombo({ ProdId, Refresh }: { ProdId: number; Refresh: (prodId: number) => void }) {
  const [combo, setCombo] = useState<Record<string, string>>({});
  const [stock, setStock] = useState(0);

  const { data: varis } = useRequest(AdminHub.Product.Get.Variants, {
    defaultParams: [ProdId],
    onSuccess(data) {
      for (const i of data)
        combo[i.Name] = "";

      setCombo({ ...combo });
    },
  });

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary" icon={<AddRegular />}>
          New Combo
        </Button>
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>
          <DialogTitle action={
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="subtle" icon={<DismissRegular />} />
            </DialogTrigger>
          }>
            New Combo
          </DialogTitle>

          <DialogContent>
            <DelegateDataGrid
              Items={varis?.map(x => ({
                Current: combo,
                Update(type: string) {
                  combo[x.Name] = type;
                  setCombo({ ...combo });
                },
                ...x
              })) || []}
              Columns={columns}
            />

            <div style={{
              ...Flex,
              justifyContent: "flex-end",
              alignItems: "center",
              columnGap: tokens.spacingVerticalM,
              marginTop: tokens.spacingHorizontalM
            }}>
              <Label>Stock</Label>

              <SpinButton value={stock} min={0} onChange={(_, x) => {
                if (x.value)
                  setStock(x.value);
                else if (x.displayValue) {
                  const i = parseInt(x.displayValue);
                  if (isInteger(i))
                    setStock(i);
                }
              }} />

              <Button appearance="primary">Submit</Button>
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
