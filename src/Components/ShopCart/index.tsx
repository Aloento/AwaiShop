import { Body1, Body1Strong, Button, Caption1, DataGridCell, Popover, PopoverSurface, PopoverTrigger, SpinButton, TableColumnDefinition, ToggleButton, createTableColumn, makeStyles, tokens } from "@fluentui/react-components";
import { CartRegular, DeleteRegular } from "@fluentui/react-icons";
import { useBoolean } from "ahooks";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { DelegateDataGrid } from "../DelegateDataGrid";
import { Confirm } from "./Confirm";
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
  conf: {
    ...Flex,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: tokens.spacingVerticalS
  }
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
          <SpinButton defaultValue={item.Quantity} min={1} max={3} />
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
 * @version 0.2.1
 */
export function ShopCart() {
  const [open, { toggle }] = useBoolean();
  const style = useStyles();
  const cart = useShopCart();

  return (
    <Popover withArrow open={open} onOpenChange={toggle}>
      <PopoverTrigger disableButtonEnhancement>
        <ToggleButton icon={<CartRegular />} appearance="subtle" size="large" checked={open} />
      </PopoverTrigger>

      <PopoverSurface className={style.prod}>
        <DelegateDataGrid Items={cart.List} Columns={CartColumns} NoHeader />

        <div className={style.conf}>
          <Body1>{cart.List.map(x => x.Quantity).reduce((prev, curr) => prev + curr, 0)} items in shopping cart</Body1>

          <Confirm />
        </div>
      </PopoverSurface>
    </Popover>
  )
}
