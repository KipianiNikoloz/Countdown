# Countdown — "Time until DIEGO is CRACKED"

This is a simple, static HTML/CSS/JS page that shows an ominous countdown to a random date/time in 2026.

- No frameworks or backend used — pure static files.
- Random target date/time in 2026 is selected on every page load.
- When the countdown reaches zero, a "DIEGO is CRACKED" overlay shows, and you can start a new randomized countdown.

## How to use

1. Open `index.html` in your browser (double click or right-click > Open with...).
2. For development, you can serve it from a simple static server or just open the file.

## Local quick-serve (PowerShell example)

If you have Python installed (>=3.x), run the following in the project root to serve a local server:

```powershell
# from within: c:\Users\nikol\Documents\Projects\Countdown
python -m http.server 8000; # then open http://localhost:8000 in your browser
```

## Files

- `index.html` — the main page markup
- `style.css` — styles and animations
- `script.js` — countdown logic and random 2026 selection

## Notes

- The chosen random date is logged to the browser console for reference.
- This page is intentionally stylized with a red/black palette to appear ominous.

Enjoy! 😈
