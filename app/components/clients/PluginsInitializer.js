"use client";

import { useEffect } from "react";

export default function PluginsInitializer() {
	useEffect(() => {
		// Bootstrap bundle
		import("bootstrap/dist/js/bootstrap.bundle.min.js");

		// Add any other JS plugin init here
	}, []);

	return null;
}
