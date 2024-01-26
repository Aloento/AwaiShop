import { Divider, Image, LargeTitle, Text, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useRefEffect } from "@fluentui/react-hooks";
import { useBoolean } from "ahooks";
import Typed from "typed.js";
import { Cover, Flex } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 1.3.5
 * @version 0.1.0
 */
const useStyles = makeStyles({
  main: {
    position: "relative",
    ...Flex,
    justifyContent: "flex-end"
  },
  img: {
    ...Cover,
    aspectRatio: "42/9",
    width: "100%",
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
  },
  mask: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    backdropFilter: "blur(1px) brightness(105%)",
  }
});

/**
 * @author Aloento
 * @since 1.3.5
 * @version 1.0.0
 */
export function Banner() {
  const style = useStyles();
  const [close, { setTrue }] = useBoolean();

  const ref = useRefEffect<HTMLSpanElement>((el) => {
    const typed = new Typed(el, {
      strings: ["AwaiShop", "Together", "Dream", "Forever"],
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 1500,
      backDelay: 3000,
      showCursor: false,
    });

    return () => typed.destroy();
  });

  if (close)
    return null;

  return <>
    <div className={style.main}>
      <Image className={style.img} src="/banner.jpg" />
      <div className={style.mask} style={{
        background: 'linear-gradient(to right, transparent, var(--colorBackgroundOverlay))',
      }} />

      <div style={{
        ...Flex,
        position: "absolute",
        top: 0,
        padding: tokens.spacingHorizontalXXXL,
      }}>
        <div>
          <LargeTitle style={{ color: "white" }}>
            Play&nbsp;
          </LargeTitle>

          <Text
            ref={ref}
            size={900}
            weight="semibold"
            underline
            style={{ color: "white" }}
          >
            ?
          </Text>

          <LargeTitle style={{ color: "white" }}>
            &nbsp;With SoarCraft
          </LargeTitle>
        </div>

      </div>
    </div>

    <Divider />
  </>;
}
