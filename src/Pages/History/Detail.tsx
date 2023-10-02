import { Body1Strong, Button, Caption1, DataGridCell, DataGridHeaderCell, Field, Label, Link, TableColumnDefinition, createTableColumn, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { useRouter } from "~/Components/Router";
import { ICartItem } from "~/Components/ShopCart";
import { useShopCart } from "~/Components/ShopCart/Context";
import { PersonaInfo } from "~/Components/ShopCart/Persona";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { ColFlex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { OrderAppend } from "./Append";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalL
  },
  prod: {
    ...ColFlex,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  qua: {
    flexBasis: "10%",
    flexGrow: 0,
    justifyContent: "center"
  },
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<ICartItem>[] = [
  MakeCoverCol(44),
  createTableColumn<ICartItem>({
    columnId: "Product",
    renderHeaderCell() {
      return <DataGridHeaderCell>Product Name & Types</DataGridHeaderCell>;
    },
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().prod}>
          <Link href={`/Product/${item.ProdId}`} appearance="subtle">
            <Body1Strong>{item.Name}</Body1Strong>
          </Link>

          <Caption1>{Object.values(item.Type).reduce((prev, curr) => `${prev} ${curr},`, "")}</Caption1>
        </DataGridCell>
      );
    }
  }),
  createTableColumn<ICartItem>({
    columnId: "Quantity",
    renderHeaderCell() {
      return <DataGridHeaderCell className={useStyles().qua}>Quantity</DataGridHeaderCell>;
    },
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().qua}>
          {item.Quantity}
        </DataGridCell>
      );
    }
  })
];

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function OrderDetail() {
  const [open, { toggle }] = useBoolean();

  const { Nav, Paths } = useRouter();
  const id = parseInt(Paths.at(2)!);

  const { List, Update } = useShopCart();
  const style = useStyles();

  const { data, run } = useRequest(Hub.Order.Get.Detail, {
    onBefore() {
      isNaN(id) && Nav("/History");
    },
    onError() {
      throw Nav("/History");
    },
    manual: true
  })

  return <>
    <Button appearance="subtle" icon={<OpenRegular />} onClick={() => {
      run(id);
      toggle();
    }} />

    <Drawer
      open={open}
      onOpenChange={toggle}
      position="end"
      size="medium"
      modalType="alert"
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              icon={<DismissRegular />}
              onClick={toggle}
            />
          }
        >
          Order Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <div className={style.body}>
          <PersonaInfo />

          <DelegateDataGrid Items={List} Columns={columns} />

          <Field label="Comment" size="large">
            <Label>{""}</Label>
          </Field>

          <OrderAppend OrderId={id} Refresh={run} />
        </div>
      </DrawerBody>
    </Drawer>
  </>
}
