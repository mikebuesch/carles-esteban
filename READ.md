# Carles Esteban — book website

Static website ready for GitHub Pages.

## Files you will edit later

You only need to edit `data.js` when you receive the texts from the USB.

Each book currently has three blank reading options:

```js
{ id: "text-1", title: "Texto 1", content: "" }
```

Paste the text inside the empty `content` value. You can add more options by copying one of these objects.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files in this folder** to the repository root.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

The website is completely static: no database, server or Firebase project is required.

## Amazon links

The three Amazon links are already configured in `data.js`.

## Covers

The three supplied cover images are in:

`assets/covers/`

## Later: custom domain

Once the site is live, a custom domain can be connected through GitHub Pages.
