import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
  // NavbarMenuToggle
} from "@heroui/navbar";
// import { link as linkStyles } from "@heroui/theme";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="shadow-md z-50"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img alt="Logo" className="h-12 w-auto" src="/logo_unimed_v5.png" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="absolute left-1/2 transform -translate-x-1/2">
          <p className="font-bold text-inherit text-2xl">Painel de controle</p>
        </NavbarContent>
        {/* <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div> */}
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent> */}
    </HeroUINavbar>
  );
};
