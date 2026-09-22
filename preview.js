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

  /* Reveals are one-shot by default: shown once, then unobserved so nothing
     keeps firing. Inside a [data-reveal-replay] container they stay observed
     instead, and lose .in again when they leave — so scrolling back up hides
     them and the next pass down plays the entrance again. */
  const reveal = (entries, obs) => {
    entries.forEach(e => {
      const replay = e.target.closest("[data-reveal-replay]");
      if (e.isIntersecting) {
        e.target.classList.add("in");
        if (!replay) obs.unobserve(e.target);
      } else if (replay) {
        e.target.classList.remove("in");
      }
    });
  };
  const io = new IntersectionObserver(reveal, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  /* data-reveal-late: for content that arrives while something else on the
     page is moving — a sheet riding up over the masthead, say. At the normal
     trigger it rises at the bottom edge of the screen while the eye is still on
     the moving edge above it, and the rise is over before anyone looks down.
     This one waits until the element's top is two-thirds of the way up the
     viewport, so the rise happens where it is being looked at. */
  const late = new IntersectionObserver(reveal, { rootMargin: "0px 0px -34% 0px", threshold: 0 });

  document.querySelectorAll(".reveal, .stagger").forEach(el =>
    (el.closest("[data-reveal-late]") ? late : io).observe(el));
})();
