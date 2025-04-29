// Layout.tsx
// Provides a shared layout for all main app pages under /home.
// - Includes the Navbar, so it appears on every main page
// - Wraps page content in FluentProvider for consistent theming
// - Renders child routes via <Outlet />

import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export default function Layout() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Navbar />
      <div style={{ paddingTop: '4rem' }}>
        <Outlet />
      </div>
    </FluentProvider>
  );
}
