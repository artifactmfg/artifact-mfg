import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Fireplaces from "./pages/Fireplaces";
import Countertops from "./pages/Countertops";
import Sinks from "./pages/Sinks";
import Commercial from "./pages/Commercial";
import Panels from "./pages/Panels";
import Products from "./pages/Products";
import ForBuilders from "./pages/ForBuilders";
import Process from "./pages/Process";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";
import Furniture from "./pages/Furniture";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/fireplaces" component={Fireplaces} />
        <Route path="/countertops" component={Countertops} />
        <Route path="/sinks" component={Sinks} />
        <Route path="/commercial" component={Commercial} />
        <Route path="/panels" component={Panels} />
        <Route path="/products" component={Products} />
        <Route path="/for-builders" component={ForBuilders} />
        <Route path="/process" component={Process} />
        <Route path="/our-philosophy" component={Manifesto} />
        <Route path="/contact" component={Contact} />
        <Route path="/furniture" component={Furniture} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
