import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { SideMenu } from "./shared/components";
import {
  AppThemeProvider,
  AuthProvider,
  DrawerProvider,
} from "./shared/contexts";
import { useAuthContext } from "./shared/hooks";

export const App = () => {
  const { signed } = useAuthContext();
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideMenu>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </SideMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
