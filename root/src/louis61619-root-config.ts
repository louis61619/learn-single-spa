import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// registerApplication(
//   "@louis61619/child-react",
//   () => System.import("@louis61619/child-react"),
//   (location) => location.pathname === "/poc-react"
// );



applications.forEach((res) => {
  // console.log(res.app)
  registerApplication(res)
});
layoutEngine.activate();
start();
