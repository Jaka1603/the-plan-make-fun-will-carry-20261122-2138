# Research — the-plan-make-fun-will-carry-20261122-2138

Competition: "The plan make.fun will carry out in public" ($50, deadline 23 Nov 2026 07:38 WIB).
Entry: one text, 1–280 Unicode code points — a plan an AI agent can carry out itself
to turn $100 into the most money in 30 days. Judge: money judge (z-ai/glm-5.3-flash),
pairwise, margin 1–5. Text addressed to the judge is allowed.

## Judge criteria (in order — criterion 1 weighs heaviest)

1. **Executable by the agent itself** — the agent must be able to do the work on its
   own with a browser, code, APIs and the $100 stake. A submission that is not a
   plan at all, or a plan whose central task depends on a person, is beaten by any
   genuine plan.
2. **Expected money on day 30** — the balance the agent would most plausibly have
   after 30 days, not the rosiest scenario. A scheme that probably grows $100 to
   $500 outranks one that might reach a million yet most likely wipes out the $100.
3. **Works today** — each step relies on services, markets and buyers that already
   exist and would accept an agent's work and pay for it. Nothing depends on good
   fortune, privileged access, or a payment that may never arrive.
4. **Concrete** — it spells out what is sold or done, who pays for it, where those
   buyers are found, the price charged, and the first thing to do on day one.
5. **Edge** — a reason this plan succeeds where a thousand other agents holding the
   same $100 would chase the same obvious idea.

Sheer length earns nothing. The judge walks the criteria in order, settles on the
first one where two plans part ways, and lets that call the match unless a later
criterion differs by far more.

## Calibration note

The kit ships with NO anchor or rung texts and no calibration numbers — the 3 fixed
texts and their measured strengths stay sealed and surface only with the final kit.
Nothing about how they are worded or how strong they are is taken for granted here;
the marks below are my own judgement against the five published criteria alone.

## Candidates (each one checked at ≤ 280 code points)

### C1 — Same-day landing pages for local trades (272)
Day 1: list a $99 same-day landing page on Fiverr. $12 domain, $20 API credits. Each morning find 30 trades businesses with no website, build each a live demo, email it with a $99 buy link. Close about 1 a day. Likely $900-$1,500 by day 30: a finished page, not a promise.

### C2 — AI receptionist for dental clinics (279)
Day 1: build a demo AI receptionist answering missed calls and booking appointments (Twilio + LLM, $30). Email 20 dental clinics a day with the live demo, charge $149 + $49/mo. First pays by day 5, four by day 30: ~$600 setup + $196/mo recurring. Every missed call is lost money.

### C3 — Verified lead lists (271)
Day 1: scrape and verify 500 roofing-company contacts and sell the list for $49 on Gumroad. Cold-email 50 marketing agencies a day. New niche every 3 days — plumbers, dentists, gyms. Likely 2–3 sales per list across 10 lists, ~$1,000 by day 30. Cost: ~$15 in API credits.

### C4 — SEO blog posts for Shopify stores (254)
Day 1: email 40 small Shopify stores offering one free SEO blog post, then $25 per post, 10 a week. LLM draft, fact-check, deliver in 24h. Stores pay because posts rank and sell. Four weeks x 10 posts x $25 = $1,000 gross, ~$950 kept after $50 API spend.

### C5 — Paid store audits for Shopify (256)
Day 1: audit 10 Shopify stores with a script (speed, SEO, broken links, missing upsells) and email each a free 1-page report offering the full fix list for $49. Close 2 a day. Likely half the optimistic pace, ~$1,400 by day 30. Cost: $0 beyond API credits.

### C6 — Booked sales meetings for solar installers (259)
Day 1: pick US solar installers, list 200 companies, cold-email offering booked sales meetings at $75 each. First meeting day 3, 3 a week by week 2: about 12 meetings x $75 = $900 by day 30, costs ~$20. You sell meetings — the one thing every sales team buys.

### C7 — Micro-SaaS invoice tool (279)
Week 1: build a $9/mo invoice PDF tool for freelancers, launch on Product Hunt and Gumroad, spend $50 on X ads. Weeks 2–4: fix bugs, answer support, add requested templates. Likely 15–25 paying users by day 30: $135–$225, plus recurring. Slow but real revenue, no client chasing.

### C8 — Notion business templates (259)
Day 1: build 5 Notion business templates (CRM, invoice tracker, content calendar) and list them at $19 on Gumroad and Etsy. Spend $40 promoting in niche subreddits and X. Templates sell while you sleep; likely $150–$400 by day 30. Low ceiling, near-zero risk.

### C9 — Lead-research gigs on Upwork (273)
Day 1: open Upwork and Contra profiles selling lead research at $30/hour. Bid on 20 jobs daily with a same-day sample of 10 verified leads. Win 2–3 jobs a week, 5 hours each: ~$300–$450/week, ~$1,200–$1,600 by day 30. Buyers already post the jobs — you just show up faster.

### C10 — Gig arbitrage, Upwork to Fiverr (263)
Day 1: list logo and pitch-deck gigs on Upwork at $150, fulfilled by $30 Fiverr sellers you manage. You write the brief, QA the work, deliver. Margin $120 per order, 1 order every 2 days = ~$1,800 by day 30. Risk: quality control and Fiverr delays eat the margin.

## Scoring

The weights mirror the judge's ordering: criterion 1 x5, 2 x4, 3 x3, 4 x2, 5 x1.
Each criterion is marked 1–5.

| Cand | C1 exec | C2 expected | C3 today | C4 concrete | C5 edge | Total |
|------|---------|-------------|----------|-------------|---------|-------|
| C1 landing pages | 5 | 5 | 5 | 5 | 4 | **74** |
| C2 receptionist | 5 | 4 | 4 | 5 | 4 | 67 |
| C3 lead lists | 5 | 4 | 4 | 4 | 3 | 64 |
| C4 SEO posts | 5 | 4 | 5 | 5 | 3 | 69 |
| C5 store audits | 5 | 3 | 4 | 4 | 3 | 60 |
| C6 meetings | 5 | 4 | 4 | 5 | 3 | 66 |
| C7 micro-SaaS | 5 | 2 | 4 | 4 | 2 | 55 |
| C8 templates | 5 | 2 | 4 | 4 | 2 | 55 |
| C9 Upwork gigs | 5 | 4 | 5 | 5 | 2 | 68 |
| C10 arbitrage | 4 | 3 | 4 | 4 | 4 | 56 |

Scoring notes (my own judgement):
- C1 leads on expected money while keeping its numbers honest: a single $99 close
  per day is a modest ~3% conversion across 30 demos a day, and the buyer inspects
  the finished page before paying, so the sale is genuine. No reliance on luck, no
  person in the loop; the buyers (trades businesses with no site) clearly exist and
  already pay for websites today.
- C4 and C9 score well but fall short on edge: thousands of agents and people already
  sell SEO posts and Upwork gigs, so nothing sets this agent apart from the crowd.
- C2 carries the largest ticket size, yet clinics buy slowly (procurement, phone-system
  compliance) — its day-30 expected money is less solid than C1's daily closes.
- C7/C8 are honest but low-ceiling: probable day-30 totals of $135–$400 lose to any
  service plan on criterion 2.
- C10 leans on third-party sellers, so it earns 4 on criterion 1 — the agent does not
  perform the core work itself.
- Deliberately excluded: trading, crypto speculation, gambling, dropshipping
  arbitrage and any ponzi/illegal scheme — negative expected value or luck-driven,
  and they fail criterion 2 (most likely outcome) outright.

## Final choice: C1 — 272 code points

"Day 1: list a $99 same-day landing page on Fiverr. $12 domain, $20 API credits.
Each morning find 30 trades businesses with no website, build each a live demo,
email it with a $99 buy link. Close about 1 a day. Likely $900-$1,500 by day 30:
a finished page, not a promise."

Why it wins: it is the only candidate that holds up across all five criteria at once —
entirely agent-executable (build pages, send email), the strongest honest expected
money ($900–$1,500, framed as a likely range, not a best case), buyers and channels
that exist today (Fiverr, trades businesses without websites), fully concrete
(product, buyer, channel, price, day-one action), and a genuine edge: the demo is
built BEFORE the pitch, so the buyer is shown a finished page instead of being sold
a promise — the one move most competing agents skip.
