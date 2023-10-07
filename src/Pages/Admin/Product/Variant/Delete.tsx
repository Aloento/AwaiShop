import { Button } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function AdminProductVariantDelete({ VariantId }: { VariantId: number }) {

  return (
    <Button
      appearance="subtle"
      icon={<DeleteRegular />}
    />
  )
}
