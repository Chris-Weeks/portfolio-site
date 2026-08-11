# Site copy

Source of truth for everything on the page. Edit here first, then mirror into
`index.html`. Word counts are noted where the brief set a target.

---

## 1. Hero

**Name:** Chris Weeks

**Positioning:** Technical Solutions Engineer — Integrations, Front-End and Automation

**Paragraph:**

> I work across 110+ ecommerce sites running on Magento 2, Shopify, WooCommerce
> and BigCommerce, integrated with EPOS and stock systems. I configure how those
> systems talk to each other, work out why they've stopped, build the front-end
> on top, and then sit down with the client and explain it.

**Meta line:** Tonbridge, Kent · Open to remote and London hybrid

**Links:** Email · LinkedIn · GitHub

---

## 2. What I do

### Integrations and data

REST and SOAP APIs, middleware troubleshooting, multi-platform ecommerce sync,
T-SQL development including stored procedures and triggers, SQL Server
performance diagnostics.

### Front-end and design

Bespoke responsive builds, landing pages, brand-led design, Magento 2 theming
and Page Builder, semantic HTML, CSS and JavaScript, GA4 and Google Tag Manager
with Consent Mode v2.

### Automation and AI

Workflow automation with Make.com and Power Automate, LLM integration via the
Claude API, internal tooling, process analysis.

---

## 3. Selected work

Each: problem → approach → outcome.

### Proving a third-party API deviated from its schema

*(143 words)*

Product syncs between an EPOS system and a client's WooCommerce store were
failing intermittently. The client's development team had reported it as a bug
in how product status was being handled.

I traced the failure to how unpublished products were returned by the WooCommerce
products endpoint, which meant records that already existed were being treated as
new and hitting duplicate key errors.

To establish where the fault actually sat, I sent an invalid status value to the
API. A correctly behaving install returns a validation error. This one returned a
success response with an empty result set, showing that the parameter filtered
results without validating its accepted values, and that runtime behaviour did
not match the published schema.

I scoped the fix and evidenced to the client's development team that what they
had reported as a defect was working as designed, with the deviation sitting in
the third-party API.

**Tags:** REST APIs · WooCommerce · Root cause analysis · Client communication

### Automating a manual merchandising process

*(146 words)*

Merchandisers were manually flagging featured products across ecommerce sites,
repeatedly and by hand.

I identified the opportunity and wrote the specification for a Magento 2 module
that promotes featured products to the top of their department listings with
distinct visual styling, giving retailers a way to draw attention to key lines.

I then built the T-SQL stored procedure that sets those flags automatically from
rolling 90-day best-seller data, handling ranking, expiry when a product drops
out of rank, and marking changed records for downstream sync.

The module was built by the development team from my specification. I led testing
throughout and reported defects through to release. A recurring manual job became
an automated one.

**Tags:** T-SQL · Requirements · QA · Magento 2

### Homepage redesign and mobile optimisation

*(128 words)*

A long-standing retail client needed their homepage modernising and optimising
for mobile.

I developed the visual direction around their established brand and site theme,
sourcing or building all supporting assets, and delivered it as a responsive,
mobile-first build.

The brief assumed a static, category-led homepage. I advised against it and made
the case for a dedicated promotions area updated regularly instead, setting out
why a homepage that rarely changes works against a retailer commercially.

I kept a detailed work log throughout, giving the client full transparency over
time spent against each element of the design.

**Tags:** Responsive design · Brand · Magento 2 · Client consultancy

### AI-assisted documentation pipeline

*(96 words)*

Writing up client meetings was taking hours each week and the output varied
between people.

I built a pipeline in Make.com that takes meeting transcripts from cloud storage,
processes them through the Claude API, and returns structured recaps with a
narrative summary and split-ownership action tables.

It removed the manual write-up and standardised the format. I have since built an
inbox triage flow in Power Automate using AI Builder on the same principle.

**Tags:** Make.com · Claude API · Power Automate · Process automation

---

## 4. Things I've built

### Boss Key Creative

*(72 words)*

An agency brand and site built from scratch in HTML5, CSS3 and JavaScript. I
designed the brand identity, wrote the copy and set the visual direction, then
built it mobile-first with interactive DOM manipulation and a custom light and
dark mode toggle. It is the piece I point at when someone wants to see design and
front-end in the same place, rather than described separately.

**Links:** bosskeycreative.design · Repository

### Self-hosted infrastructure

*(66 words)*

A Proxmox virtualisation host running Docker services and VPN-routed containers,
with Cloudflare Tunnel for secure remote access and fail2ban enforcement applied
via API. I also administer a UK VPS running persistent game servers, covering
provisioning, updates and remote access. It is where most of what I know about
networking, containers and the ways remote access goes wrong was actually
learned.

---

## 5. About and contact

I am based in Tonbridge, Kent, and open to remote and London hybrid work.

Most of what I do sits in the gap between systems that were never designed to
talk to each other. That mostly means reading logs properly, being stubborn about
reproducing a fault, and knowing the difference between a thing that is broken
and a thing that is behaving exactly as written. I like the moment a problem
stops being mysterious.

The rest of it is people. Explaining a root cause to someone who does not want a
lecture on HTTP status codes is a real skill and I have got better at it than I
used to be.

**Contact:** christopherweeks93@gmail.com · LinkedIn · GitHub

---

## Meta

- **Title:** Chris Weeks — Technical Solutions Engineer
- **Meta description:** Technical Solutions Engineer working across integrations
  and data, front-end and design, and automation and AI. Based in Tonbridge,
  Kent, open to remote and London hybrid.
