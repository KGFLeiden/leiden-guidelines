# Website: Leiden Guidelines on the Use of Digitally-Derived Evidence

This readme document aims to provide an overview of the technical aspects of the website, with a view to ensuring that the website can be maintained and developed further.

## Components of the Website

To bake a cake, we need ingredients, a recipe, and an oven. This isn't too different from how this website is put together. It brings together content (ingredients), applies a website structure and design set out in a configuration file (recipe), and a service which publishes the website online (oven). The content and website configuration file are stored in this GitHub repository. The repository is connected to [Netlify](https://www.netlify.com/), which builds the website and deploys it online.

### Ingredients: Website Content

The content of the website, including the Guidelines themselves, other webpages, downloadable files, and media files, is stored in the `docs` folder. Indeed, this is a requirement: content must, and can only be, in the `docs` folder.

Within the `docs` folder:
- `assets` contains the downloadable PDFs, website logo, and favicon.
- `guidelines` contains the guidelines themselves; the Introduction is saved as `index.md`.
- `javascripts` contains instructions - `newtab.js` - that tells the website to open external links (for example, [Legal Tools](https://legal-tools.org/) or the statutory rules) in a new tab.
- `resources` contains - at the moment - only `downloads.md`, which provides the links to download the PDFs. In the future, other information, such as dissemination events or publicity material, can be added here.
- `index.md` is homepage of the website.
- Please note that both `index.md` files must be named as such. The file names cannot be changed. It can be a bit confusing, but just remember that the page is an index for the folder it's in. Thus, `index.md` in the `docs` folder is the 'index' of the website, that is, the homepage; `index.md` in the `guidelines` folder is the 'index' of the Guidelines, that is, the Introduction.

### Recipe: Website Configuration File

The configuration file - `mkdocs.yml` - defines the design and functionality of the website. The website is generated with [MkDocs](https://www.mkdocs.org/), applying the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. Specific parameters are explained in the `mkdocs.yml` file itself as comments (lines that begin with #). Refer to the [MkDocs User Guide](https://www.mkdocs.org/user-guide/) and [Material for MkDocs Setup](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/). These pages tell you everything you need to know about how to configure the website.

### Oven: Netlify

Netlify is accessed through its [own website](https://app.netlify.com/). However, there are two Netlify-specific files in the repository which should be edited, if need be, through GitHub.
- `runtime.txt` tells Netlify to use Python 3.8, a programming language, to build the website. Python runs 'under the hood'; no coding was involved in developing the website. Think of it as the electricity necessary for the oven to operate. One certainly doesn't need to be an electrician or do any electrical work to use an oven!
- `requirements.txt` tells Netlify to build the website according to MkDocs and the Material theme.

## Formatting Content

The content pages are formatted with the help of Markdown. These are saved as Markdown files which end in `.md`. [Pandoc](https://pandoc.org/) is a useful document conversion tool which can be used to convert `.docx` Word files to `.md` Markdown files. See this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for a quick introduction to the most frequently used elements. For more advanced users, it's helpful to remember that Markdown is a subset of HTML: all HTML syntax in a Markdown file will be validly rendered.

The most important elements for our purposes are:
- [Headings](https://www.markdownguide.org/basic-syntax/#headings)
- [Emphasis](https://www.markdownguide.org/basic-syntax/#emphasis) (bold/italics)
- [Footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)
- [Links](https://www.markdownguide.org/basic-syntax/#links)

Please apply the following conventions:
- Use Heading 3 (###) for the Guidelines themselves: `### Guideline A1. Videos...`.
- Some special syntax is required around the keywords. Please note: there must be four spaces (and four spaces only) before the keywords themselves/below the three exclamation marks. The keywords will therefore align nicely with the 'n' in 'note'. Refer to [this page on Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) for customisation options.
```
!!! note "Keywords"
    relevance; probative value; prejudice
```
- Bold sub-headings within the commentary, including the full stop (two asterisks on each side): `**Time Limits.** Pursuant to ...`.
- Note that underlining is very Markdown-unfriendly and should be avoided if possible.
- Place all footnotes (citations) at the end of the page. It's not necessary to renumber the footnotes in the syntax, as this is automatically done from footnote 1 when the website is built.
