import { useTheme } from "@/hooks/useTheme";
import { Icon } from "@/components/ui/Icon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-2 text-content transition-colors hover:border-brand/50 hover:text-brand"
    >
      {theme === "dark" ? (
        <Icon name="Sun" size={16} />
      ) : (
        <Icon name="Moon" size={16} />
      )}
    </button>
  );
}
