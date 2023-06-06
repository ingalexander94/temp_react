import CityIcon from "@/assets/menu/ic_city.svg";
import CityActiveIcon from "@/assets/menu/ic_city_active.svg";
import CouponIcon from "@/assets/menu/ic_coupon.svg";
import CouponActiveIcon from "@/assets/menu/ic_coupon_active.svg";
import PlanIcon from "@/assets/menu/ic_plans.svg";
import PlanActiveIcon from "@/assets/menu/ic_plans_active.svg";
import PhotographerIcon from "@/assets/menu/ic_photographer.svg";
import PhotographerActiveIcon from "@/assets/menu/ic_photographer_active.svg";
import UserIcon from "@/assets/menu/ic_user.svg";
import UserActiveIcon from "@/assets/menu/ic_user_active.svg";
import SessionIcon from "@/assets/menu/ic_photoshoot.svg";
import SessionActiveIcon from "@/assets/menu/ic_photoshoot_active.svg";
import NotificationIcon from "@/assets/menu/ic_notification.svg";
import NotificationActiveIcon from "@/assets/menu/ic_notification_active.svg";
import PromotionIcon from "@/assets/menu/ic_promotion.svg";
import PromotionActiveIcon from "@/assets/menu/ic_promotion_active.svg";
import DashboardIcon from "@/assets/menu/ic_dashboard.svg";
import DashboardActiveIcon from "@/assets/menu/ic_dashboard_active.svg";
import RecoveryIcon from "@/assets/menu/ic_password.svg";

const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    active: DashboardActiveIcon,
    route: "/dashboard",
  },
  {
    name: "Usuarios",
    icon: UserIcon,
    active: UserActiveIcon,
    route: "/usuarios",
  },
  {
    name: "Fotógrafos",
    icon: PhotographerIcon,
    active: PhotographerActiveIcon,
    route: "/fotografos",
  },
  {
    name: "Sesiones",
    icon: SessionIcon,
    active: SessionActiveIcon,
    route: "/sesiones",
  },
  {
    name: "Ciudades",
    icon: CityIcon,
    active: CityActiveIcon,
    route: "/ciudades",
  },
  {
    name: "Notificaciones",
    icon: NotificationIcon,
    active: NotificationActiveIcon,
    route: "/notificaciones",
  },
  {
    name: "Promociones",
    icon: PromotionIcon,
    active: PromotionActiveIcon,
    route: "/promociones",
  },
  {
    name: "Cupones",
    icon: CouponIcon,
    active: CouponActiveIcon,
    route: "/cupones",
  },
  {
    name: "Planes",
    icon: PlanIcon,
    active: PlanActiveIcon,
    route: "/planes",
  },
  {
    name: "Cambiar contraseña",
    icon: RecoveryIcon,
    activeActive: null,
    route: "",
  },
];

export { menuItems };
