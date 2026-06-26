# SS14 Paperwork Studio

SS14 Paperwork Studio is a static browser tool for filling, editing, previewing, and copying Space Station 14 paperwork. It includes a catalog of NanoTrasen-style forms, character profiles, role assignment, draft storage, and SS14 markup preview.

User data stays in the browser through `localStorage`. The app can be hosted as plain static files, including GitHub Pages.

## Recent Changes

- Improved desktop visual hierarchy and simplified form status display.
- Added clearer, form-specific participant roles.
- Cleaned up field labels and reduced repeated helper text across forms.
- Added live participant chips for manually typed field values.
- Added a Retro 98 theme with classic controls and wiki-hosted SS14 images.
- Fixed SS14 formatting tags inside field previews.
- Corrected several form templates with reused or unclear person fields.

## Files

- `index.html` -- the full static app.
- `data/forms.json` -- built-in form catalog.
- `data/departments.json`, `data/jobs.json`, `data/clauses.json`, `data/field-presets.json` -- supporting data.
