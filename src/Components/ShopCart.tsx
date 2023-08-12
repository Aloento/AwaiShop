import { Popover, PopoverSurface, PopoverTrigger, ToggleButton } from "@fluentui/react-components";
import { CartRegular } from "@fluentui/react-icons";

interface ICartItem {
  Id: number;
  Image: string;
  Name: string;
  Type: string;
  Quantity: number;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ShopCart() {

  return (
    <Popover withArrow>
      <PopoverTrigger disableButtonEnhancement>
        <ToggleButton icon={<CartRegular />} appearance="subtle" size="large" />
      </PopoverTrigger>

      <PopoverSurface>
        123
      </PopoverSurface>
    </Popover>
  )
}
