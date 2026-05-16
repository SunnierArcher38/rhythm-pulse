# Rhythm Pulse

A rhythm game inspired by FNF and osu!mania, built as a single-file web app.

## Features

- **Downscroll gameplay** with adjustable hit line position
- **Local music loading** — drag & drop or browse for audio files
- **Auto-chart generation** using beat detection aligned to exact beat times
- **4 difficulty modes**: Easy, Normal, Hard, Insane
- **Hold notes** with sustained key press and single judgment on completion
- **Smooth beat-reactive zoom** effects (FNF-style pulse & combo milestones)
- **Full-circle radial visualizer** with 4-way mirroring and side dimming
- **Menu media player** with prev/next, loop/shuffle, auto-advance, and seek
- **Visualizer persists during pause** (cached frame)
- **Purple universe radial gradient** background
- **Results screen** with grades, stats, timing graph, and copy-to-clipboard
- **Pause menu**, countdown timer, settings panel
- **Practice mode** with loop, speed control, and minimap
- **Modifier system** (Mirror, Random, No Fail, etc.)
- **Achievements system** with 19 unlockable achievements
- **IndexedDB persistence** for offline song storage
- **Service worker** for offline support
- **Rolling average FPS** counter (60-frame window)

## How to Play

1. Open `index.html` in a modern browser
2. Load music files via drag & drop or file browser
3. Select a song and choose difficulty
4. Hit notes as they reach the receptors using the assigned keys:
   - **4K**: D, F, J, K
   - **5K**: D, F, Space, J, K
   - **6K**: S, D, F, J, K, L
   - **7K**: S, D, F, Space, J, K, L
5. Tap hold notes require sustained key press; judgment awarded on release

## Scoring

| Judgment | Timing Window |
|----------|--------------|
| Marvelous | ±22ms |
| Perfect | ±45ms |
| Great | ±90ms |
| Good | ±135ms |
| Miss | ±180ms |

## Deployment

The game is a static single-page app. Deploy to any static host:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Files

- `index.html` — Complete game (HTML, CSS, JS)
- `sw.js` — Service worker for offline caching
