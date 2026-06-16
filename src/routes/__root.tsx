import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="heading-display text-6xl text-gold-gradient">Not Found</h1>
        <p className="mt-4 text-sm text-[color:var(--ivory)]/70">
          The page you're looking for has slipped past the spotlight.
        </p>
        <Link to="/" className="btn-gold mt-8">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-display text-3xl text-white">Something went wrong</h1>
        <p className="mt-3 text-sm text-[color:var(--ivory)]/60">Please try again.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IVVA International — Visionary Victory Achievers Awards" },
      { name: "description", content: "IVVA International celebrates the architects of human excellence. Where vision meets victory across nations." },
      { name: "author", content: "IVVA International" },
      { property: "og:title", content: "IVVA International — Visionary Victory Achievers Awards" },
      { property: "og:description", content: "IVVA International celebrates the architects of human excellence. Where vision meets victory across nations." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IVVA International" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IVVA International — Visionary Victory Achievers Awards" },
      { name: "twitter:description", content: "IVVA International celebrates the architects of human excellence. Where vision meets victory across nations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/08c9ed69-0d90-4fb2-ab89-d17acc2fd005/id-preview-332c93f5--6e9418d6-629a-4541-a853-a2e47372f7c2.lovable.app-1781589437364.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/08c9ed69-0d90-4fb2-ab89-d17acc2fd005/id-preview-332c93f5--6e9418d6-629a-4541-a853-a2e47372f7c2.lovable.app-1781589437364.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-black text-[color:var(--ivory)]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
