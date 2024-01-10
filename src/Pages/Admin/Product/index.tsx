import { Body1Strong, DataGridCell, DataGridHeaderCell, TableColumnDefinition, createTableColumn, makeStyles } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { MakeCoverCol } from "~/Helpers/CoverCol";
import { Logger } from "~/Helpers/Logger";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";
import { DelegateDataGrid } from "../../../Components/DataGrid/Delegate";
import { AdminProductDetail } from "./Detail";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export interface IProductItem extends Partial<IProductCount> {
  Id: number;
  Cover: string;
  Name: string;
  Category: string;
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
 * @version 0.1.1
 */
const columns: TableColumnDefinition<IProductItem>[] = [
  MakeCoverCol(50, log),
  createTableColumn({
    columnId: "Product",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Product</DataGridHeaderCell>
    },
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
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Category</DataGridHeaderCell>
    },
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
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Variant</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Variant}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Combo",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Combo</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Combo}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Stock",
    renderHeaderCell: () => {
      return <DataGridHeaderCell>Stock</DataGridHeaderCell>
    },
    renderCell(item) {
      return <DataGridCell>{item.Stock}</DataGridCell>
    }
  }),
  createTableColumn({
    columnId: "Action",
    renderHeaderCell: () => {
      return (
        <DataGridHeaderCell className={useStyles().two}>
          Detail
        </DataGridHeaderCell>
      )
    },
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
 * @version 1.0.0
 */
export function AdminProduct() {
  const admin = AdminHub.Product.Get;
  const user = Hub.Product.Get;

  const [map, setMap] = useState<Record<number, IProductItem>>({});

  useEffect(() => {
    const sub = admin.List(log).subscribe({
      async next(idList) {
        for (const id of idList) {
          const prod = await user.Product(id);

          if (!prod) {
            log.warn(`Product ${id} Not Found`);
            continue;
          }

          const photos = await user.PhotoList(id);
          const cover = await admin.FindCover(photos, id, log);

          if (!cover)
            log.warn(`Product ${id} has no photo`);

          map[id] = {
            Id: id,
            Cover: cover || "",
            Name: prod.Name,
            Category: prod.Category || "Pending"
          };

          setMap({ ...map });
        }
      },
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <DelegateDataGrid Items={Object.values(map).reverse()} Columns={columns} />
  )
}
