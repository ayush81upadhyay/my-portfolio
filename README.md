# Ayush Upadhyay — Portfolio

A responsive React portfolio. The visible portfolio text and lists are loaded from XML files in `public/data/`, so you can update most of the content without changing React code.

## Run the site locally

1. Install Node.js (LTS) and npm.
2. From the project folder, install dependencies and start the development server:

   ```sh
   npm install
   npm start
   ```

3. Open `http://localhost:3000`. After editing an XML file, refresh the page to see the change. Stop the server with Ctrl+C.
4. Check that the production build works with `npm run build`.

## Where content lives

| File | What it controls |
| --- | --- |
| `public/data/hero.xml` | Name, title, introduction, email, social links, hero button |
| `public/data/about.xml` | About paragraph and bullet highlights |
| `public/data/experience.xml` | Work history, roles, dates, locations, achievements |
| `public/data/education.xml` | Education entries, dates, grades/status, highlights |
| `public/data/skills.xml` | Skill groups, individual skills, proficiency percentages |
| `public/data/projects.xml` | Project cards, descriptions, technologies, links, featured styling |

Open the relevant file in VS Code, change the text between its XML tags, and save. Keep the outer/root tag and the field/tag names as they are: the app expects these names when it parses the files.

## Editing each file

### Hero — `public/data/hero.xml`

Edit the text inside each element. Social links should be complete URLs; email should be an email address. These fields are displayed in the top hero area.

```xml
<hero>
  <name>Your Name</name>
  <tagline>Your Job Title</tagline>
  <subtitle>A short introduction shown below your title.</subtitle>
  <location>City, Country</location>
  <email>you@example.com</email>
  <socials>
    <github>https://github.com/yourname</github>
    <linkedin>https://www.linkedin.com/in/yourname/</linkedin>
  </socials>
  <cta>View My Work</cta>
</hero>
```

### About — `public/data/about.xml`

Change `<summary>` for the paragraph. To add a highlight, copy a `<highlight>` line inside `<highlights>` and edit its text. Remove a line to remove a highlight; retain the `<highlights>` element and at least one highlight.

```xml
<about>
  <summary>Write a short professional summary here.</summary>
  <highlights>
    <highlight>First achievement or fact</highlight>
    <highlight>Second achievement or fact</highlight>
  </highlights>
</about>
```

### Experience — `public/data/experience.xml`

Each `<job>` becomes a selectable company/role in the Experience section. Edit the values within a job to update it. To add another role, copy a complete `<job>...</job>` block inside `<experience>`, then change every field and give it a new, unique `<id>`. A job's accomplishments go inside `<points>` as one `<point>` per item. `<project>` is optional; the other fields should be kept.

```xml
<experience>
  <job>
    <id>5</id>
    <company>Company Name</company>
    <role>Frontend Developer</role>
    <period>Jan 2024 – Present</period>
    <location>City, Country · Hybrid</location>
    <project>Project name</project>
    <points>
      <point>Describe a result, responsibility, or feature.</point>
      <point>Add another accomplishment.</point>
    </points>
  </job>
</experience>
```

### Education — `public/data/education.xml`

Each `<entry>` becomes an education accordion. Copy a full `<entry>` block to add a school or qualification and assign a unique `<id>`. Use `Ongoing` or `Completed` for `<status>`. Add each detail as a `<point>` inside `<highlights>`.

```xml
<education>
  <entry>
    <id>5</id>
    <institution>University Name</institution>
    <degree>Degree or qualification</degree>
    <field>Subject</field>
    <period>Sep 2022 – Jun 2025</period>
    <grade>CGPA 9.0</grade>
    <status>Completed</status>
    <highlights>
      <point>Relevant achievement or subject</point>
    </highlights>
  </entry>
</education>
```

### Skills — `public/data/skills.xml`

A `<category>` creates a skill card. Its `name` is an XML attribute and becomes the card heading. Each `<skill>` is shown with a progress bar; set its `level` attribute to a number from 0 to 100. Copy a `<skill>` line to add a skill, or copy a complete `<category>` block to add a group.

```xml
<skills>
  <category name="Frontend">
    <skill level="90">React</skill>
    <skill level="80">TypeScript</skill>
  </category>
  <category name="Tools">
    <skill level="75">Git</skill>
  </category>
</skills>
```

### Projects — `public/data/projects.xml`

Each `<project>` creates a project card. Copy the full block to add a project and use a unique `<id>`. List technologies in `<tech>` separated by comma and a space (`, `). Set `<featured>true</featured>` to highlight a project; use `false` otherwise. Leave `<github>` or `<live>` empty if there is no corresponding link.

```xml
<projects>
  <project>
    <id>4</id>
    <title>Project Name</title>
    <description>What it does and what you built.</description>
    <tech>React, TypeScript, Node.js</tech>
    <github>https://github.com/yourname/project</github>
    <live>https://your-live-demo.example</live>
    <featured>true</featured>
  </project>
</projects>
```

## XML editing tips

- Keep the XML declaration and the root element (`<hero>`, `<about>`, etc.) in each file.
- Every opening tag needs a matching closing tag. For example, close `<company>` with `</company>`.
- Escape reserved characters in text: write `&amp;` for `&`, `&lt;` for `<`, and `&gt;` for `>`. Example: `R&amp;D` displays as “R&D”.
- Keep quotation marks around attributes: `<category name="Frontend">` and `<skill level="90">`.
- Use unique IDs when adding jobs, education entries, or projects.
- Preserve required fields and list containers (`<points>`, `<highlights>`, `<socials>`). New XML tag names are not automatically displayed; adding a brand-new kind of information requires a corresponding React component change.
- If the page fails to load after an edit, check the browser console and confirm the XML remains well-formed and all tags are closed.

## Adding or changing images

The About section portrait is configured in `public/data/about.xml`:

```xml
<portrait>/images/ayush-profile.jpg</portrait>
```

To add or replace the portrait:

1. Copy the photo into `public/images/` and name it `ayush-profile.jpg` (JPEG is recommended; WebP or PNG also work if you update the XML path to match).
2. Keep the `<portrait>` path in `public/data/about.xml` in sync with the filename. For example, `/images/profile.webp` means the file must be `public/images/profile.webp`.
3. Refresh the site. The About section crops the photo into a responsive professional frame. The image is decorative to screen readers only in the sense that it has concise portrait alt text for accessibility.

The hero and section background illustrations are SVG files in `public/images/`. They are referenced by the section components; replacing those assets with the same filenames updates the artwork without editing XML.

## Publishing changes

XML and image changes appear locally after saving and refreshing. To publish, commit and push the changes to the deployment branch/repository, then allow the configured GitHub Pages deployment to finish. Run `npm run build` first to catch XML-independent code or styling build errors.

## Project structure

```text
public/
  data/                 Portfolio content in XML
  images/               Decorative and personal image assets
src/
  components/           Page sections and their styles
  store/                Redux data loading
  utils/xmlParser.js    Fetches and parses XML files
  App.css               Global colors and layout defaults
```
