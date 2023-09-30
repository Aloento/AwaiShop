import { Toast, ToastBody, ToastTitle, useToastController } from "@fluentui/react-components";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function use500Toast() {
  const { dispatchToast } = useToastController();

  return (e: Error) => dispatchToast(
    <Toast>
      <ToastTitle>SPA Internal Error</ToastTitle>
      <ToastBody subtitle="More Info, See Console">{e.message || `${e}`}</ToastBody>
    </Toast>,
    { intent: "error" }
  );
}
