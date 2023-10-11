import { Avatar, Link, Menu, MenuGroupHeader, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { useBoolean } from "ahooks";
import { useAuth } from "react-oidc-context";
import { WithAuth, WithoutAuth } from "./Auth/With";
import { Setting } from "./Setting";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AvatarMenu() {
  const [isMenu, { toggle: toggleMenu }] = useBoolean();
  const [isModal, { toggle: toggleModal }] = useBoolean();

  const auth = useAuth();

  return <>
    <Menu open={isMenu} onOpenChange={toggleMenu}>
      <MenuTrigger>
        <Avatar size={36} active={isMenu ? "active" : "unset"} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>

          <WithAuth>
            <MenuGroupHeader>Hi {auth.user?.profile.sub}</MenuGroupHeader>
          </WithAuth>

          <WithoutAuth>
            <MenuItem onClick={() => auth.signinRedirect()}>Login</MenuItem>
          </WithoutAuth>

          <WithAuth>
            <Link appearance="subtle" href="/History">
              <MenuItem>History</MenuItem>
            </Link>

            <Link appearance="subtle" href="/Admin">
              <MenuItem>Admin</MenuItem>
            </Link>

            <MenuItem onClick={toggleModal}>Setting</MenuItem>

            <MenuItem onClick={() => auth.signoutRedirect()}>Logout</MenuItem>
          </WithAuth>

        </MenuList>
      </MenuPopover>
    </Menu>

    <Setting Open={isModal} Toggle={toggleModal} />
  </>
}
