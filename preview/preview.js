/* ============================================================
   SHARED BEHAVIOUR FOR THE REDESIGN SUB-PAGES
   Two small things: the pill nav's mobile menu, and scroll reveals.
   Both mirror redesign.html so the pages feel like one site.
   ============================================================ */

/* ---------- mobile menu ---------- */
(() => {
  const toggle = document.getElementById("navToggle");
  const panel  = document.getElementById("navPanel");
  if (!toggle || !panel) return;

  const setMenu = open => {
    panel.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  toggle.addEventListener("click", () => setMenu(!isOpen()));
  panel.addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && isOpen()) { setMenu(false); toggle.focus(); }
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav") && isOpen()) setMenu(false);
  });
})();

/* ---------- scroll reveals ----------
   Every direct child of a section's .wrap rises on entry, and any .stagger
   container cascades its own children. IntersectionObserver rather than a
   scroll handler, and unobserved once shown so nothing keeps firing. */
(() => {
  // .stagger containers animate their own children, so they must not also be
  // faded in as a block — that would run two animations over the same element.
  document.querySelectorAll(".sec .wrap > *:not(.stagger)")
    .forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  document.querySelectorAll(".reveal, .stagger").forEach(el => io.observe(el));
})();
