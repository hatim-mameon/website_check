# Platform brand assets — what we may use, and where it came from

Research date: **17 August 2026**. Brand guidelines change; re-check before a
major launch. This is a summary of what the platforms publish, not legal advice.

---

## The short version

Four rules showed up on nearly every platform's guidelines:

1. **Use only official files.** Never redraws, never assets pulled from icon
   sites, Google Images or Wikipedia. This was the single most consistent rule,
   stated explicitly by Meta, LinkedIn, Snap, Reddit and TikTok.
2. **Never imply sponsorship, endorsement or partnership.** Stated by all twelve.
3. **Keep your own brand more prominent than theirs.** Stated by Instagram,
   Google and YouTube in near-identical wording.
4. **Don't modify the mark** — no recolouring, redrawing, outlining, stretching,
   3D effects or combining it with your own logo. Proportional resizing is fine
   (YouTube says so explicitly; the others prohibit only distortion).

## The distinction that decides everything

Every platform draws the same line, and it is not about the artwork:

| How the use is framed | Outcome |
| --- | --- |
| "Our product integrates with X" — developer/API context | Generally permitted; official assets provided |
| "X is part of our marketing" | Requires written permission |

TikTok, YouTube, Google and LinkedIn all gate the marketing framing while
opening the integration one. A row of logos under a marketing headline reads as
the second. The same logos, modestly sized and linking out, read as the first.

This matters more than which file we use.

---

## Platform by platform

### No prior permission needed — conditions only

**Instagram** — permission is required *only* for broadcast, radio, out-of-home,
or print larger than 8.5×11". Ordinary website use needs no request. Must use
Brand Resource Center files; must not be the most prominent element; must not
abbreviate ("Insta", "gram") or combine with our name.

**Facebook** — same Meta asset pack. The current mark is the **f in a blue
circle**; the blue rounded square is retired. Meta will not license marks for
merchandise.

**Pinterest** — "We're happy to have you promote your Pinterest presence and
content," conditioned on not suggesting Pinterest sponsors or is affiliated with
us. No permission needed. The *files*, however, sit behind a Partner login
(separate from a normal Pinterest account) — brand access via corebrand@pinterest.com.

**Snapchat** — usage rules rather than a permission gate. Ghost logo in **black
or white only**; clear space of at least 100% of the logo's height on each side;
same size as other social logos when shown in a row. Assets are behind a
`vault.snap.com` login.

**X** — official toolkit, black and white variants. Note the SVG in their pack is
the *white* version; the black variant ships only as PNG.

**Telegram** — openly downloadable, no gate. Only stated condition: "make sure
people understand you're not representing Telegram officially."

**Bluesky** — official assets published openly, subject to their trademark policy.

### Written permission required

**Google Ads** — product icons require a Partner Marketing Hub account plus an
approval request. Google's flow is *"submit your assets for approval"*: we send a
mockup of how the icon appears in our material and they approve that usage; it is
not a licence that unlocks a download. Plain-text references to "Google Ads" are
explicitly permitted without any of this. Google does allow *small depictions of
product icons to indicate integration* — our use case is the kind they
contemplate; it is the artwork that is gated.

**LinkedIn** — third-party developers are asked to email
trademarkrequest@linkedin.com. Notably, the "in" logo *in a row of social icons
indicating participation* is a listed permitted use, so a request should be
routine. Colour and shape must not be altered.

**Reddit** — "in most cases, you'll need to get permission first." Snoo's
commercial use is reserved for Reddit and licensed partners. This is the one we
should expect a "no" on. Fallback: name Reddit in text, which nobody restricts.

**TikTok** — the strictest: *"You may not use TikTok logos, icons, symbols, or
designs, without our prior written permission."* One exception — the official
**Developer asset pack** (login and share buttons) may be used for integration
without further approval. Nothing outside that pack is usable.

**YouTube** — general brand use goes through a Brand Use Request Form, **but**
"you do not need special approval to use YouTube APIs or to promote API
functionality in your application." The [API Services Branding
Guidelines](https://developers.google.com/youtube/terms/branding-guidelines) then
provide three approved options — "Developed with YouTube", the YouTube Logo, and
the YouTube Icon — with no request needed. Two conditions bite: any YouTube logo
in an application **must link back to YouTube content** (so a decorative logo in
a marquee would not qualify), and it must not be the most prominent element.

---

## Where we stand

The site uses six official marks, in the second-fold marquee and the third-fold
grid:

| Platform | Asset | Source |
| --- | --- | --- |
| Facebook | `platforms/official/facebook.png` | Meta Brand Resource Center |
| Instagram | `platforms/official/instagram.png` | Meta Brand Resource Center |
| Pinterest | `platforms/official/pinterest.png` | Pinterest (partner download) |
| X | `platforms/official/x.png` | X brand toolkit (black variant) |
| Telegram | `platforms/official/telegram.svg` | telegram.org/press |
| Bluesky | `platforms/official/bluesky.svg` | bsky.social brand assets |

Removed from the site, logos and names: **Google Ads, LinkedIn, Reddit**
(permission required) and **Snapchat** (no official asset obtainable).

`platforms/*.svg` still holds the original third-party redraws. These are used
only by `preview/redesign2.html` and should be replaced on the same terms if that
variant ever ships.

## Handling notes

- **Never commit the raw brand packs.** They are licensed downloads and were 36 MB.
  They live in `brand-source/`, which is gitignored. Only web-sized derivatives
  go in `platforms/official/`.
- **Meta's Instagram "SVG" is not vector** — it is a 10.9 MB base64 raster in an
  SVG wrapper. Use the PNG.
- All web assets are scaled to 256px, which covers the marquee's ~109px render at
  2× retina. Proportional scaling only — no recolouring or redrawing.
- The download gates on Meta and LinkedIn ("I have read and accept the applicable
  guidelines") **are** the licence. Bypassing them yields artwork with no
  permission attached, which is worse than using nothing.

## Open items

- [ ] LinkedIn — email trademarkrequest@linkedin.com
- [ ] Google Ads — Partner Marketing Hub account, then the approval form
- [ ] Pinterest / Snapchat — partner access if we want the remaining files
- [ ] Reddit — likely unavailable; use text
- [ ] Decide whether the third-fold copy ("FB, IG, Reddit, Snapchat, Google Ads…")
      should still name platforms the logo row no longer shows. Text names are
      unrestricted, so this is editorial, not compliance.
- [ ] Prominence: platform names in the marquee render up to 152px while the
      mameon wordmark is 70px. Three platforms have a rule against exactly this.
- [ ] Consider a footer line: "All trademarks are the property of their respective
      owners. mameon is not affiliated with, endorsed by, or sponsored by these
      platforms."

## Sources

- [Meta — Facebook logo](https://www.meta.com/brand/resources/facebook/logo/)
- [Meta — Instagram brand](https://www.meta.com/brand/resources/instagram/instagram-brand/)
- [Google Brand Resource Center](https://about.google/brand-resource-center/guidance/)
- [Google — how to show Google's brand](https://partnermarketinghub.withgoogle.com/brands/google/branding-guidelines/how-to-show-googles-brand/)
- [LinkedIn brand policies](https://brand.linkedin.com/policies)
- [Snapchat Ghost logo guidelines](https://help.snapchat.com/hc/en-us/articles/7012349890452-Snapchat-Ghost-Logo-Usage-Guidelines)
- [Reddit brand guidelines (PDF)](https://40687240.fs1.hubspotusercontent-na1.net/hubfs/40687240/Reddit%20Inc/PDF/reddit_brand_guidelines_202009-3.pdf)
- [X brand toolkit](https://about.x.com/en/who-we-are/brand-toolkit)
- [Pinterest brand guidelines](https://business.pinterest.com/brand-guidelines/)
- [TikTok design guidelines](https://developers.tiktok.com/doc/getting-started-design-guidelines)
- [YouTube API Services branding guidelines](https://developers.google.com/youtube/terms/branding-guidelines)
