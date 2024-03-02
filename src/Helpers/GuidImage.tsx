import { Image } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { ComponentProps } from "react";
import { Hub } from "~/ShopNet";
import type { ICompLog, Logger } from "./Logger";
import { useSWR } from "./useSWR";

const hold = (txt: string) => "https://placehold.co/400?text=" + txt + "...";

/**
 * @author Aloento
 * @since 1.4.0
 * @version 0.1.0
 */
export function useGuidImage(guid: string, pLog: Logger) {
  const log = useConst(() => pLog.With("GuidImage"));

  const req = useSWR(guid, (id) => Hub.Storage.GetBySlice(id, log), {
    onError: log.error,
    defaultParams: [guid],
    useMemory: true
  });

  return req;
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.3.0
 */
export function GuidImage({ Guid, ParentLog, ...rest }: { Guid?: string } & ComponentProps<typeof Image> & ICompLog) {
  if (!Guid)
    return <Image {...rest} src={hold("Pending")} />;

  const { data } = useGuidImage(Guid, ParentLog);

  return <Image {...rest} src={data ? URL.createObjectURL(new Blob(data)) : hold("Loading")} />;
}
