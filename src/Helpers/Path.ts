/**
 * @author Aloento
 * @since 0.1.1 MusiLand
 * @version 0.1.1
 */
export function Combine(paths: readonly (string | false | undefined)[]): string {
  const p = (paths
    .filter(x => x) as string[])
    .map(x => x.replace(/^\/+/, ""))
    .join("/");

  return `/${p}`;
}
