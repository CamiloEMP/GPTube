import { useEffect } from "react";
import "@/styles/globals.css";
import { MyAppProps } from "@/components/Common/Types";
import { Layouts } from "@/components/Layouts/Layouts";
import { AuthContextProvider } from "@/context/AuthContext/AuthContext";
import { useRouter } from "next/router";
import Script from "next/script";
import ProtectedRoute from "@/components/Security/ProtectedRoute";

const noAuthRequired = ["/", "/login", "/reset", "/pricing"];

export default function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  return (
    <>
      <AuthContextProvider>
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      </AuthContextProvider>
      <Script src="https://assets.lemonsqueezy.com/lemon.js" defer />
    </>
  );
}
