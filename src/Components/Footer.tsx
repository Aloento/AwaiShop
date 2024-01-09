import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Flex, NavW } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.1
 */
const useStyles = makeStyles({
  box: {
    width: "-webkit-fill-available",
    marginTop: tokens.spacingVerticalXXXL,
    ...shorthands.padding(tokens.spacingVerticalXXXL, 0),
    backgroundColor: tokens.colorNeutralBackgroundInverted
  },
  main: {
    ...Flex,
    maxWidth: NavW,
    ...shorthands.margin(0, "auto"),
  },
  logo: {
    width: "150px",
    filter: "invert(96%)"
  },
  otc: {
    color: "white"
  }
});

/**
 * @author Aloento
 * @since 0.3.1 MusiLand
 * @version 0.1.1
 */
export function Footer(): JSX.Element {
  const style = useStyles();

  return (
    <footer className={style.box}>
      <div className={style.main}>
        <img src="/safari-pinned-tab.svg" className={style.logo} />
      </div>
    </footer>
  );
};
