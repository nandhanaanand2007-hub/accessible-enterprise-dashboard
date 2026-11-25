# Reusable component structure

The shared interface is organized into reusable patterns:

- **Header:** brand, mobile navigation toggle, and account control.
- **Sidebar navigation:** consistent links and `aria-current="page"` on the active page.
- **Stat card:** concise metric label, value, and supporting status.
- **Data table:** caption, column headers with `scope="col"`, and responsive horizontal scrolling.
- **Modal dialog:** native `<dialog>` with a labelled heading, labelled fields, validation, and status feedback.
- **Form field:** visible `<label>` elements associated with controls by matching `for` and `id`.

Shared styling is in `../css/styles.css`; shared interactions are in `../js/app.js`.
