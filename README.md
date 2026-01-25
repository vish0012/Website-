# Vishal Chauhan — Personal Website

This is a simple static website template for Human–Machine Interaction researcher Vishal Chauhan.

## 🌐 Website Link

**Live Website:** https://vish0012.github.io/Website-/

The website is hosted on GitHub Pages and showcases research, publications, projects, experience, and contact information.

### Setting up GitHub Pages (First Time Setup)

To make your website accessible at the URL above, follow these steps:

1. **Merge this PR** into the `main` branch
2. **Enable GitHub Pages** in your repository:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Click **Save**
3. Wait 1-2 minutes for the deployment to complete
4. Your website will be live at https://vish0012.github.io/Website-/

**Note:** A GitHub Actions workflow (`.github/workflows/deploy.yml`) has been added to automatically deploy your website whenever you push changes to the main branch.

Files included
- `index.html` — main page
- `styles.css` — styling
- `script.js` — small JS for mobile nav
- `cv-placeholder.txt` — placeholder note for CV
- `.gitignore` — recommended git ignore entries
- `README.md` — this file

How to add these files to your repository (recommended)
1. Create a new branch (locally or on GitHub) called `site`.
2. Add the files to the repository root.
3. Commit and push the `site` branch.
4. Open a Pull Request from `site` into `main`.

Git commands (example)
```bash
git checkout -b site
# copy files into repo root
git add index.html styles.css script.js README.md .gitignore cv-placeholder.txt
git commit -m "Add static personal website for Vishal Chauhan"
git push -u origin site
```

PR title & body (suggested)
Title:
Add static personal website for Vishal Chauhan

Body:
This PR adds a responsive static personal website for Vishal Chauhan. Included files:
- `index.html` — homepage with sections: hero, summary, research, publications, projects, experience, education, skills, and contact.
- `styles.css` — responsive styles using Inter font.
- `script.js` — mobile nav toggle and a placeholder to set Google Scholar link.
- `cv-placeholder.txt` — placeholder advising to upload `cv.pdf`.
- `README.md`, `.gitignore`

Notes:
- Replace `cv-placeholder.txt` with your real `cv.pdf` at repository root (or upload `cv.pdf` and update the Download CV link).
- Add your Google Scholar URL in `script.js` or directly in `index.html`.
- To publish: enable GitHub Pages in repository settings (branch: `main` after merging the PR, or set GitHub Pages to use `site` branch / `gh-pages` if you prefer).
- If you want a profile photo, add an image (e.g., `avatar.jpg`) and replace the hero area accordingly.

How to publish (GitHub Pages)
1. Merge the PR into `main`.
2. Go to repository Settings → Pages.
3. Select branch `main` and folder `/ (root)`, Save.
4. After a minute, your site will be available at `https://<your-username>.github.io/<repo-name>/` or the repository Pages domain.

Customizations
- Change the accent color in `styles.css` (variable `--accent`).
- Add Google Scholar and other social links.
- Convert to Jekyll/Next.js/Hugo if you want a blog or CMS features.

If you want, I can:
- Provide a zipped archive of these files for download.
- Create the branch and open the pull request for you if you grant me repository write access or provide instructions to connect.
- Convert this to a Jekyll/Next.js scaffold.
