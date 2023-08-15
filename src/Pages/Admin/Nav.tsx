import { Link, Tab, TabList, Text, tokens } from "@fluentui/react-components";
import { useRouter } from "~/Components/Router";
import { Flex } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminTopNav() {
  const { Paths } = useRouter();
  const path1 = Paths.at(0);
  const path2 = Paths.at(1) || "Product";

  return (
    path1 === "Admin" &&

    <div style={{
      ...Flex,
      flexGrow: 1,
      height: "inherit",
      marginLeft: tokens.spacingHorizontalS,
      alignItems: "center"
    }}>
      <Text size={600} font="monospace" style={{ color: tokens.colorNeutralForegroundDisabled }}>|</Text>

      <TabList defaultSelectedValue={path2} >
        <Link appearance="subtle" href="/Admin" style={{ textDecorationLine: "unset" }}>
          <Tab value="Product">Product List</Tab>
        </Link>

        <Link appearance="subtle" href="/Admin/Order" style={{ textDecorationLine: "unset" }}>
          <Tab value="Order">Order List</Tab>
        </Link>

        <Link appearance="subtle" href="/Admin/User" style={{ textDecorationLine: "unset" }}>
          <Tab value="User">User List</Tab>
        </Link>
      </TabList>
    </div>
  )
}
