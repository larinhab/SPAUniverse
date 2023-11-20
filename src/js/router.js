export class Router {
    routes = {}
    add(routeName, page) {
        this.routes[route.name] = page
    }

    route (event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        this.handle()

}
    
    handle() {
        const { pathname } = window.location
        const route = route[pathname] || route [404]

    fetch(route)
    .then((data) => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
};

}