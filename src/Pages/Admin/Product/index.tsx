import { Body1Strong, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, SkeletonItem, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { useAsyncEffect } from "ahooks";
import { useState } from "react";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { Logger } from "~/Helpers/Logger";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminProductDetail } from "./Detail";
import { AdminProductRow } from "./Row";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
interface IProductItem extends Partial<IProductCount> {
  Id: number;
  Cover: string;
  Name: string;
  Category?: string;
}

/**
 * @author Aloento
 * @since 1.3.0
 * @version 0.1.0
 */
export interface IProductCount {
  Variant: number;
  Combo: number;
  Stock: number;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  two: {
    flexBasis: "2.5%",
    flexGrow: 0
  },
  twoc: {
    flexBasis: "2.5%",
    flexGrow: 0,
    justifyContent: "center"
  }
});

const log = new Logger("Admin", "Product");

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
const columns: TableColumnDefinition<IProductItem>[] = [
  MakeCoverCol(50, log),
  createTableColumn({
    columnId: "Product",
    renderHeaderCell: () => <DataGridHeaderCell>Product</DataGridHeaderCell>,
    renderCell(item) {
      return (
        <DataGridCell>
          <Body1Strong>{item.Name}</Body1Strong>
        </DataGridCell>
      )
    }
  }),
  createTableColumn({
    columnId: "Category",
    renderHeaderCell: () => <DataGridHeaderCell>Category</DataGridHeaderCell>,
    renderCell(item) {
      return (
        <DataGridCell>
          <Body1Strong>{item.Category}</Body1Strong>
        </DataGridCell>
      )
    }
  }),
  createTableColumn({
    columnId: "Variant",
    renderHeaderCell: () => <DataGridHeaderCell>Variant</DataGridHeaderCell>,
    renderCell(item) {
      return <DataGridCell>{item.Variant}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Combo",
    renderHeaderCell: () => <DataGridHeaderCell>Combo</DataGridHeaderCell>,
    renderCell(item) {
      return <DataGridCell>{item.Combo}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Stock",
    renderHeaderCell: () => <DataGridHeaderCell>Stock</DataGridHeaderCell>,
    renderCell(item) {
      return <DataGridCell>{item.Stock}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Action",
    renderHeaderCell: () => (
      <DataGridHeaderCell className={useStyles().two}>
        Detail
      </DataGridHeaderCell>
    ),
    renderCell(item) {
      return (
        <DataGridCell className={useStyles().twoc}>
          <AdminProductDetail ProdId={item.Id} />
        </DataGridCell>
      )
    },
  })
]

/**
 * @author Aloento
 * @since 0.1.0
 * @version 1.1.1
 */
export function AdminProduct() {
  const admin = AdminHub.Product.Get;
  const hub = Hub.Product.Get;

  const [map, setMap] = useState<Record<number, IProductItem>>({});
  const idList = admin.useList(log);

  useAsyncEffect(async () => {
    if (!idList?.length)
      return;

    const record = idList.reduce((acc, cur) => {
      acc[cur] = {
        Id: cur,
        Cover: "",
        Name: "Loading..."
      };

      return acc;
    }, map);

    setMap({ ...record });

    for (const id of idList) {
      const prod = await hub.Product(id).catch(log.error);

      if (!prod) {
        log.warn(`Product ${id} Not Found`);
        continue;
      }

      const [_, cover] = await hub.PhotoList(id, log);

      if (!cover)
        log.warn(`Product ${id} has no photo`);

      record[id] = {
        Id: id,
        Cover: cover,
        Name: prod.Name,
        Category: prod.Category || "Pending"
      };

      setMap({ ...record });

      admin.Count(id)
        .then(res => {
          record[id] = {
            ...record[id],
            ...res
          };

          setMap({ ...record });
        })
        .catch(log.error);
    }
  }, [idList]);

  return (
    <DataGrid
      items={idList || []}
      columns={columns}
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => renderHeaderCell()}
        </DataGridRow>
      </DataGridHeader>

      <DataGridBody<number>>
        {(data) => <AdminProductRow {...data} />}
      </DataGridBody>

      {!idList && <SkeletonItem size={48} />}
    </DataGrid>
  )
}
