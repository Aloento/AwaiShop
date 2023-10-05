import { Button, DataGridCell, DataGridHeaderCell, Subtitle1, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { AddRegular, ArrowDownRegular, ArrowUpRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
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
      return (
        <DataGridCell className={useStyles().f11}>
          <Button
            appearance="subtle"
            icon={<ArrowUpRegular />}
          />

          <Button
            appearance="subtle"
            icon={<ArrowDownRegular />}
          />

          <AdminProductPhotoEdit />
        </DataGridCell>
      )
    },
  })
]

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function AdminProductPhoto({ ProdId }: { ProdId: number }) {
  const { data } = useRequest(Hub.Product.Get.Carousel, {
    defaultParams: [ProdId]
  })

  return <>
    <div className={useStyles().box}>
      <Subtitle1>Photos</Subtitle1>
      <Button appearance="primary" icon={<AddRegular />}>New Image</Button>
    </div>

    <DelegateDataGrid Items={data || []} Columns={columns} />
  </>
}
