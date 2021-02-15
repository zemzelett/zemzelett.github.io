const cacheName = "vm-app-v1";

self.addEventListener("install", (e) => {
	const appFiles = [
		"index.html",
		"/dist/app.js",
		"/api-response/res.json",
		"/data/lines.json",
		"/img/arrow-right-circle.svg",
		"/img/Bus-Logo.svg",
		"/img/Fähre-Logo.svg",
		"/img/funnel.svg",
		"/img/herz.svg",
		"/img/Tram-Logo.svg",
		"/img/U-Bahn-Logo.svg",
		"/img/U1.svg",
		"/img/U2.svg",
		"/img/U3.svg",
		"/img/U4.svg",
		"/img/U5.svg",
		"/img/U6.svg",
		"/img/U7.svg",
		"/img/U8.svg",
		"/img/U9.svg",
		"/img/U12.svg",
		"/img/U55.svg",
	];
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(appFiles);
		})
	);
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((r) => {
			return (
				r ||
				fetch(e.request).then((response) => {
					return caches.open(cacheName).then((cache) => {
						cache.put(e.request, response.clone());
						return response;
					});
				})
			);
		})
	);
});
