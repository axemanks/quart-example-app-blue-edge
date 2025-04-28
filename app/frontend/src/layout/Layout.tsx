import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <FluentProvider theme={webLightTheme} style={{ minHeight: "100vh" }}>
      <div style={{ padding: 24 }}>
        {/* App-wide navigation or header can go here */}
        <Outlet />
      </div>
    </FluentProvider>
  );
}
