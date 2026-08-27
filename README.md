# Ayush Upadhyay — Portfolio

A React.js portfolio with Redux-powered XML data, Framer Motion animations, and a fully responsive design. All visible content lives in plain XML files under `public/data/` — no code changes needed to update text.

---

## Tech Stack

- **React.js** (CRA) + **Redux Toolkit**
- **Framer Motion** for scroll-triggered animations
- **fast-xml-parser** for XML → JS object parsing
- Plain **CSS** with CSS custom properties (no Tailwind)

---

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build
```

---

## Updating Content (XML Data Files)

All content is stored in `public/data/`. Edit any file and the UI reflects changes on next page load — no component code changes needed.

### `public/data/hero.xml` — Hero section

Controls your name, tagline, subtitle, email, social links, and CTA button text.

```xml
<hero>
  <name>Your Name</name>
  <tagline>Your Title</tagline>
  <subtitle>A short bio shown below your title.</subtitle>
  <location>City, Country</location>
  <email>you@example.com</email>
  <socials>
    <github>https://github.com/yourhandle</github>
    <linkedin>https://linkedin.com/in/yourhandle</linkedin>
  </socials>
  <cta>View My Work</cta>   <!-- button label -->
</hero>
```

---

### `public/data/about.xml` — About section

`<summary>` is the paragraph text. Add or remove `<highlight>` items freely — each renders as a bullet point.

```xml
<about>
  <summary>Write your bio here.</summary>
  <highlights>
    <highlight>Fact or achievement one</highlight>
    <highlight>Fact or achievement two</highlight>
    <!-- add as many as you want -->
  </highlights>
</about>
```

---

### `public/data/experience.xml` — Experience section

Each `<job>` is a tab in the switcher. Add a new `<job>` block for a new role. The `<id>` must be unique. `<points>` can have as many `<point>` children as needed.

```xml
<experience>
  <job>
    <id>5</id>                            <!-- unique number -->
    <company>Company Name</company>       <!-- tab label -->
    <role>Your Role</role>
    <period>Mon YYYY – Mon YYYY</period>
    <location>City · Remote/On-site</location>
    <project>Project Name (optional)</project>
    <points>
      <point>What you built or achieved.</point>
      <point>Another accomplishment.</point>
    </points>
  </job>
</experience>
```

> **Note:** XML special characters must be escaped: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`

---

### `public/data/skills.xml` — Skills section

Each `<category>` renders as a card. `name` is the card heading. Each `<skill>` has a `level` attribute (0–100) that drives the progress bar width.

```xml
<skills>
  <category name="Category Name">
    <skill level="90">Skill Name</skill>
    <skill level="75">Another Skill</skill>
    <!-- add as many skills as you like -->
  </category>
  <!-- add more <category> blocks for more cards -->
</skills>
```

> **Important:** `level` is an XML **attribute**, not a child element. It must sit inside the opening `<skill>` tag.

---

### `public/data/projects.xml` — Projects section

Each `<project>` renders as a card. Set `<featured>true</featured>` to give the card a highlighted border. Leave `<github>` or `<live>` empty if not applicable — the link button won't render.

```xml
<projects>
  <project>
    <id>4</id>                            <!-- unique number -->
    <title>Project Title</title>
    <description>Short description of the project.</description>
    <tech>React.js, Node.js, MongoDB</tech>   <!-- comma-separated -->
    <github>https://github.com/you/repo</github>
    <live>https://your-live-url.com</live>    <!-- leave empty if none -->
    <featured>true</featured>                 <!-- true or false -->
  </project>
</projects>
```

---

### `public/data/education.xml` — Education section

Each `<entry>` renders as an accordion row in the timeline. `<status>` must be either `Ongoing` (amber badge) or `Completed` (green badge). `<highlights>` can have zero or more `<point>` children.

```xml
<education>
  <entry>
    <id>5</id>                            <!-- unique number -->
    <institution>University Name</institution>
    <degree>Degree Title</degree>
    <field>Field of Study</field>
    <period>Mon YYYY – Mon YYYY</period>
    <grade>85%</grade>                    <!-- or "Ongoing", "CGPA 9.5", etc. -->
    <status>Completed</status>            <!-- Completed | Ongoing -->
    <highlights>
      <point>Key subject or achievement.</point>
      <point>Another detail.</point>
    </highlights>
  </entry>
</education>
```

---

## Project Structure

```
public/
  data/
    hero.xml          # Hero section data
    about.xml         # About section data
    experience.xml    # Work experience data
    skills.xml        # Skills + proficiency levels
    projects.xml      # Project cards
    education.xml     # Education timeline
src/
  components/         # One .js + .css file per section
  store/
    portfolioSlice.js # Redux slice — fetches all 6 XMLs on load
    store.js
  utils/
    xmlParser.js      # fetch + parse XML utility
  App.js
  App.css             # Global CSS variables (theme lives here)
```

---

## Theming

All colours are CSS custom properties in `src/App.css`. Change them once to retheme the entire site:

```css
:root {
  --bg-deep: #0f0f1e;        /* page background */
  --bg-mid: #13132a;         /* alternate section background */
  --accent: #818cf8;         /* primary accent */
  --accent-vivid: #6366f1;   /* buttons, highlights */
  --accent-soft: #a5b4fc;    /* gradients, subtle accents */
  --text-primary: #eeeef8;
  --text-muted: #9090b8;
  --text-faint: #5a5a7a;
  --border: rgba(129,140,248,0.15);
  --glow: rgba(99,102,241,0.18);
}
```

