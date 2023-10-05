import { Button, DataGridCell, DataGridHeaderCell, Subtitle1, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { AddRegular, ArrowDownRegular, ArrowUpRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { Flex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/useToast";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminProductPhotoEdit } from "./Edit";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  f11: {
    flexBasis: "11%",
    flexGrow: 0
  },
  box: {
    ...Flex,
    justifyContent: "space-between"
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export interface IPhotoItem {
  Id: number;
  Cover: string;
  Caption?: string;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const columns: TableColumnDefinition<IPhotoItem>[] = [
  MakeCoverCol(70),
  createTableColumn<IPhotoItem>({
    columnId: "Caption",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Caption</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Caption}</DataGridCell>
    }
  }),
  createTableColumn<IPhotoItem>({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell className={useStyles().f11}>
          Action
        </DataGridHeaderCell>
      )
    },
    renderCell(item) {
      const { dispatchError } = use500Toast();

      const { run } = useRequest(AdminHub.Product.Post.MovePhoto, {
        manual: true,
        onFinally([req], _, e) {
          if (e)
            dispatchError({
              Message: "Failed Update Order",
              Request: req,
              Error: e
            });

          update();
        },
      });

      return (
        <DataGridCell className={useStyles().f11}>
          <Button
            appearance="subtle"
            icon={<ArrowUpRegular />}
            onClick={() => run(item.Id, true)}
          />

          <Button
            appearance="subtle"
            icon={<ArrowDownRegular />}
            onClick={() => run(item.Id, false)}
          />

          <AdminProductPhotoEdit />
        </DataGridCell>
      )
    },
  })
]

let update: () => void;

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function AdminProductPhoto({ ProdId }: { ProdId: number }) {
  const { data, run } = useRequest(Hub.Product.Get.Carousel, {
    defaultParams: [ProdId]
  });

  update = () => run(ProdId);

  return <>
    <div className={useStyles().box}>
      <Subtitle1>Photos</Subtitle1>
      <Button appearance="primary" icon={<AddRegular />}>New Image</Button>
    </div>

    <DelegateDataGrid Items={data || []} Columns={columns} />
  </>
}
