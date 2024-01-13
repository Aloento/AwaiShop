import dayjs, { Dayjs } from "dayjs";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

/**
 * @author Aloento
 * @since 0.3.1 MusiLand
 * @version 0.2.1
 */
interface ITable<T> {
  Id: string;
  Exp: number | string | null;
  Val: NonNullable<T>;
}

/**
 * @author Aloento
 * @since 0.3.1 MusiLand
 * @version 0.3.0
 */
export class Table {
  public readonly Sto: Dexie.Table<ITable<unknown>, string>;

  public constructor(public readonly DB: Dexie, public readonly Name: string) {
    this.Sto = DB.table(Name);
    this.Trim();
  }

  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  public useGet<T>(key: string): T | undefined {
    const res = useLiveQuery(() => this.Sto.get(key)) as ITable<T> | undefined;

    if (!res)
      return res;

    return res.Val;
  }

  /**
   * @author Aloento
   * @since 0.1.0 MusiLand
   * @version 0.2.0
   */
  public async Get<T>(key: string, expire?: (x?: ITable<T>) => Promise<boolean>): Promise<T | null> {
    const find = await this.Sto.get(key) as ITable<T> | undefined;

    if (find) {
      if ((expire && await expire(find)) ||
        (typeof find.Exp === "number" && find.Exp < dayjs().unix())) {
        await this.Sto.delete(key);
        return null;
      }

      return find.Val;
    }

    return null;
  }

  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  public useGetOrSet<T>(
    key: string,
    fac: () => Promise<T>,
    exp?: () => (Dayjs | null)
  ): T | undefined {
    const res = useLiveQuery(async () => {
      const find = await this.Sto.get(key) as ITable<T> | undefined;
      if (find) return find.Val;

      // Calling non-Dexie API:s from querier
      const val = await Promise.resolve(this.Set<T>(key, await fac(), exp?.()));
      return val;
    });

    return res;
  }

  /**
   * @author Aloento
   * @since 0.1.0 MusiLand
   * @version 0.2.0
   */
  public async GetOrSet<T>(
    key: string,
    fac: () => Promise<T>,
    exp?: Dayjs | null,
    expire?: (x?: ITable<T>) => Promise<boolean>
  ): Promise<T> {
    const res = await this.Get<T>(key, expire);
    if (res) return res;
    return this.Set<T>(key, await fac(), exp);
  }

  /**
   * @author Aloento
   * @since 0.1.0 MusiLand
   * @version 0.2.1
   */
  public async Set<T>(id: string, val: T, exp?: Dayjs | null): Promise<T> {
    if (!val)
      throw TypeError("Value cannot be null");

    if (exp === null) {
      await this.Sto.put({
        Id: id, Exp: exp,
        Val: val
      });

      return val;
    }

    const time = (exp || dayjs().add(1, "week")).unix();
    if (exp && time < dayjs().unix())
      throw RangeError(`Expire time [${time}] cannot be less than now [${dayjs().unix()}]`);

    await this.Sto.put({
      Id: id, Exp: time,
      Val: val
    });

    return val;
  }

  /**
   * @author Aloento
   * @since 0.3.0 MusiLand
   * @version 0.2.1
   */
  public Trim() {
    return this.Sto
      .filter(x => typeof x.Exp === "number" && x.Exp < dayjs().unix())
      .delete();
  }
}
