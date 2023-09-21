import { Body1Strong, Button, Caption1, DataGridCell, Field, Popover, PopoverSurface, PopoverTrigger, SpinButton, TableColumnDefinition, ToggleButton, createTableColumn, makeStyles } from "@fluentui/react-components";
import { CartRegular, DeleteRegular } from "@fluentui/react-icons";
import { useBoolean } from "ahooks";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { ColFlex } from "~/Helpers/Styles";
import { Confirm } from "../Confirm";
import { DelegateDataGrid } from "../DelegateDataGrid";
import { useShopCart } from "./Context";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  prod: {
    ...ColFlex,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  qua: {
    flexBasis: "10%",
    flexGrow: 0
  },
  act: {
    flexBasis: "7%",
    flexGrow: 0
  },
  conf: ColFlex
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export interface ICartItem {
  Id: number;
  Image: string;
  Name: string;
  Type: string[];
  Quantity: number;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.1
 */
export const CartColumns: TableColumnDefinition<ICartItem>[] = [
  MakeCoverCol(44),
  createTableColumn<ICartItem>({
    columnId: "Product",
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().prod}>
          <Body1Strong>{item.Name}</Body1Strong>
          <Caption1>{item.Type.reduce((prev, curr) => `${prev} ${curr},`, "")}</Caption1>
        </DataGridCell>
      )
    }
  }),
  createTableColumn<ICartItem>({
    columnId: "Quantity",
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().qua}>
          <Field defaultValue={item.Quantity}>
            <SpinButton />
          </Field>
        </DataGridCell>
      )
    }
  }),
  createTableColumn<ICartItem>({
    columnId: "Action",
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().act}>
          <Button appearance="subtle" icon={<DeleteRegular />} />
        </DataGridCell>
      )
    },
  })
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function ShopCart() {
  const [open, { toggle }] = useBoolean();
  const cart = useShopCart();

  return (
    <Popover withArrow open={open} onOpenChange={toggle}>
      <PopoverTrigger disableButtonEnhancement>
        <ToggleButton icon={<CartRegular />} appearance="subtle" size="large" checked={open} />
      </PopoverTrigger>

      <PopoverSurface className={useStyles().prod}>
        <DelegateDataGrid Items={cart.List} Columns={CartColumns} NoHeader />
        <Confirm />
      </PopoverSurface>
    </Popover>
  )
}
