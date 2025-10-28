import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiInboxArchiveFill, HiUsers, MdAnalyticsOutlined, RiSearchLine, MdAddOutlined, PrTrash, RiAlertLine, MdEditOutlined } from "oh-vue-icons/icons";


export default defineNuxtPlugin((nuxtApp) => {
  // Register icons globally
  addIcons(RiInboxArchiveFill, HiUsers, MdAnalyticsOutlined, RiSearchLine, MdAddOutlined, PrTrash, RiAlertLine, MdEditOutlined);

  // Register <v-icon> globally
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
