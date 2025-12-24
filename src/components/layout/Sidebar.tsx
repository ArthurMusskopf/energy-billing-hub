import { Link, useLocation } from "react-router-dom";
import { FileText, Receipt, LayoutDashboard, History, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
const navigation = [{
  name: "Upload de Faturas",
  href: "/",
  icon: FileText
}, {
  name: "Boletos",
  href: "/boletos",
  icon: Receipt
}, {
  name: "Dashboard",
  href: "/dashboard",
  icon: LayoutDashboard
}, {
  name: "Histórico",
  href: "/historico",
  icon: History
}];
export function Sidebar() {
  const location = useLocation();
  return <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar">
      <div className="flex h-full flex-col bg-chart-2 text-chart-2">
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6 border-b border-sidebar-border/30 bg-chart-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
            <Zap className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">ACER</h1>
            <p className="text-xs text-sidebar-foreground/70">Energias Renováveis</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6 text-chart-2 bg-chart-2">
          {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return <Link key={item.name} to={item.href} className={cn("flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200", isActive ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground")}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>;
        })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border/30 p-4">
          <Link to="/configuracoes" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sidebar-foreground/80 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Settings className="h-5 w-5" />
            Configurações
          </Link>
        </div>
      </div>
    </aside>;
}