import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import LanguageSelect from "@/pages/LanguageSelect";
import AttackSlides from "@/pages/AttackSlides";
import NotFound from "@/pages/not-found";
import "./i18n/i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LanguageSelect} />
      <Route path="/attacks" component={AttackSlides} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
