import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Avatar, Link, Menu, MenuGroupHeader, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { useBoolean } from "ahooks";
import { useEffect } from "react";
import { OnNewUserSubject } from "./NewUser";
import { Setting } from "./Setting";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.3.1
 */
export function AvatarMenu() {
  const [isMenu, { toggle: toggleMenu }] = useBoolean();
  const [isModal, { toggle: toggleModal }] = useBoolean();

  const { instance } = useMsal();
  const [mount, { set: setMount }] = useBoolean(true);

  useEffect(() => {
    OnNewUserSubject.subscribe(x => setMount(!x));
  }, []);

  const claim = instance.getActiveAccount();
  const name = claim?.name || claim?.username;

  return <>
    <Menu open={isMenu} onOpenChange={toggleMenu}>
      <MenuTrigger>
        <Avatar size={36} active={isMenu ? "active" : "unset"} name={name} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>

          <AuthenticatedTemplate>
            <MenuGroupHeader>Hi {name}</MenuGroupHeader>
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <MenuItem onClick={() => instance.loginRedirect()}>
              Login
            </MenuItem>
          </UnauthenticatedTemplate>

          <AuthenticatedTemplate>
            <Link appearance="subtle" href="/History">
              <MenuItem>History</MenuItem>
            </Link>

            <Link appearance="subtle" href="/Admin">
              <MenuItem>Admin</MenuItem>
            </Link>

            <MenuItem onClick={toggleModal}>Setting</MenuItem>

            <MenuItem onClick={() => instance.logoutRedirect()}>
              Logout
            </MenuItem>
          </AuthenticatedTemplate>

        </MenuList>
      </MenuPopover>
    </Menu>

    {
      mount &&
      <AuthenticatedTemplate>
        <Setting Open={isModal} Toggle={toggleModal} />
      </AuthenticatedTemplate>
    }
  </>
}
