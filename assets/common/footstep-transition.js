(() => {
  const selector = [
    "[data-footstep-transition]",
    ".zone[href]",
    ".selection .btn[href]:not([href='#'])",
    ".home-link[href]"
  ].join(", ");

  const links = [...document.querySelectorAll(selector)];
  if (!links.length) return;

  const transition = document.createElement("div");
  transition.className = "page-transition";
  transition.setAttribute("aria-hidden", "true");

  const leftPaw = "assets/common/left-footprint.png";
  const rightPaw = "assets/common/right-footprint.png";
  transition.innerHTML = `
    <div class="transition-card">
      <div class="paw-trail">
        <img src="${leftPaw}" alt="">
        <img src="${rightPaw}" alt="">
        <img src="${leftPaw}" alt="">
        <img src="${rightPaw}" alt="">
        <img src="${leftPaw}" alt="">
        <img src="${rightPaw}" alt="">
      </div>
      <div data-transition-label>Loading</div>
    </div>
  `;
  document.body.appendChild(transition);

  const label = transition.querySelector("[data-transition-label]");
  const preloaded = new Set();
  const isFileProtocol = window.location.protocol === "file:";

  const preloadPage = (href) => {
    if (isFileProtocol) return;
    const url = new URL(href, window.location.href).href;
    if (preloaded.has(url)) return;
    preloaded.add(url);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = url;
    link.as = "document";
    document.head.appendChild(link);
  };

  const activateTransition = (link, event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank") return;
    event.preventDefault();
    preloadPage(link.href);

    const targetPath = new URL(link.href, window.location.href).pathname.replace(/\\/g, "/");
    const isReverse =
      targetPath.endsWith("/zoo-map.html") ||
      targetPath.endsWith("/index.html");

    const zoneLabel = link.classList.contains("zone")
      ? `前往${link.getAttribute("aria-label") || link.textContent.trim() || "書區"}`
      : "";
    label.textContent = link.dataset.transitionLabel || zoneLabel || link.textContent.trim() || "Loading";
    transition.classList.remove("is-active");
    transition.classList.toggle("is-reverse", isReverse);
    void transition.offsetWidth;
    transition.classList.add("is-active");

    window.setTimeout(() => {
      window.location.assign(link.href);
    }, 1220);
  };

  links.forEach((link) => {
    link.addEventListener("pointerenter", () => preloadPage(link.href), { passive: true });
    link.addEventListener("touchstart", () => preloadPage(link.href), { passive: true });
    link.addEventListener("click", (event) => activateTransition(link, event));
  });

  document.querySelectorAll(".selection .card").forEach((card) => {
    const link = card.querySelector(".btn[href]:not([href='#'])");
    if (!link) return;
    card.style.cursor = "pointer";
    card.addEventListener("pointerenter", () => preloadPage(link.href), { passive: true });
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      link.click();
    });
  });
})();
