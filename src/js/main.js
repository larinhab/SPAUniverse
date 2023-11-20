import { Router } from "./router.js";

const router = new Router()
router.add('/', "/pages/index.html")
router.add('/universe', "/pages/universe.html")
router.add('/explorer', "/pages/explorer.html")
router.add(404, "/page/404.html")//

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()