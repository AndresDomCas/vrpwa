const static = "dev-vr-v1"

const assets = [
    "/",
    "/www/index.html",
    "./assets/js/play-on-click.js",
    "./assets/js/hide-on-click.js"
]


self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets)
      })
    )
  })

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})


