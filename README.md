<p align="center">
  <h1 align="center">🎵 Rhythm Pulse</h1>
  <p align="center">
    <em>A rhythm game inspired by FNF & osu!mania — built as a single-file web app.</em>
  </p>
  <p align="center">
    <a href="https://sunnierarcher38.github.io/rhythm-pulse/"><img src="https://img.shields.io/badge/%F0%9F%8E%AE%20Play%20Now-7c3aed?style=for-the-badge" alt="Play Now"></a>
    <a href="https://discord.gg/aa83vhpC4v"><img src="https://img.shields.io/badge/Discord-Join_Us-9b59b6?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  </p>
</p>

---

## ✨ Features

<table>
  <tr>
    <td valign="top" width="50%">
      <h3>🎮 Gameplay</h3>
      <ul>
        <li><strong>Downscroll</strong> with adjustable hit line</li>
        <li><strong>4K / 5K / 6K / 7K</strong> lane support</li>
        <li><strong>Hold notes</strong> with sustained press</li>
        <li><strong>4 difficulties</strong>: Easy → Insane</li>
        <li><strong>Modifiers</strong>: Mirror, Random, No Fail & more</li>
        <li><strong>Practice mode</strong> with loop, speed & minimap</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h3>🎨 Visuals</h3>
      <ul>
        <li><strong>Beat-reactive zoom</strong> (FNF-style pulse)</li>
        <li><strong>Radial visualizer</strong> with 4-way mirroring</li>
        <li><strong>Purple universe</strong> gradient background</li>
        <li><strong>Combo milestone</strong> zoom effects</li>
        <li><strong>Hit effects</strong>, lane glow & particle trails</li>
        <li><strong>Cached visualizer</strong> during pause</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%">
      <h3>🎵 Music</h3>
      <ul>
        <li><strong>Drag & drop</strong> or browse for local files</li>
        <li><strong>Auto-chart generation</strong> from beat detection</li>
        <li><strong>Media player</strong> with prev/next, loop, shuffle</li>
        <li><strong>Auto-advance</strong> to next song on end</li>
        <li><strong>Offline support</strong> via IndexedDB + Service Worker</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h3>🏆 Progression</h3>
      <ul>
        <li><strong>19 achievements</strong> to unlock</li>
        <li><strong>Grades</strong> with timing graph</li>
        <li><strong>Score sharing</strong> via clipboard</li>
        <li><strong>Favorites</strong> & song sorting</li>
        <li><strong>Rolling FPS</strong> counter (60-frame avg)</li>
      </ul>
    </td>
  </tr>
</table>

## 🎯 How to Play

```
1. Open index.html in a modern browser
2. Load music files via drag & drop or file browser
3. Select a song and choose difficulty
4. Hit notes as they reach the receptors!
```

### Key Bindings

| Mode | Keys |
|------|------|
| **4K** | `D` `F` `J` `K` |
| **5K** | `D` `F` `Space` `J` `K` |
| **6K** | `S` `D` `F` `J` `K` `L` |
| **7K** | `S` `D` `F` `Space` `J` `K` `L` |

> Hold notes require sustained key press — judgment awarded on release.

## 📊 Scoring

| Judgment | Window | Points |
|----------|--------|--------|
| ✨ **Marvelous** | ±22ms | 350 |
| 💎 **Perfect** | ±45ms | 300 |
| 🟢 **Great** | ±90ms | 200 |
| 🔵 **Good** | ±135ms | 100 |
| 🔴 **Miss** | ±180ms | 0 |

### Combo Multiplier

| Combo Range | Multiplier |
|-------------|------------|
| 0–9 | ×1 |
| 10–19 | ×2 |
| 20–49 | ×3 |
| 50+ | ×4 |

## 🚀 Deployment

The game is a static single-page app — deploy anywhere:

- **GitHub Pages** — push to `main` branch
- **Netlify** — drag `index.html` to deploy
- **Vercel** — connect repo
- **Any web server** — just serve the files

## 🎵 Free Music Sources

Grab some tracks to play with! All of these are copyright-free or have permissive licenses:

| Source | License | Notes |
|--------|---------|-------|
| [**NCS (NoCopyrightSounds)**](https://ncs.io) | Free to use | Electronic/dance — huge library, just credit the artist |
| [**Incompetech**](https://incompetech.com/) | CC BY | Kevin MacLeod's massive library, attribution required |
| [**Pixabay Music**](https://pixabay.com/music/) | Royalty-free | No attribution needed, broad genres |
| [**OpenGameArt**](https://opengameart.org) | Mixed (CC/CC0) | Game-focused tracks, check individual licenses |
| [**Free Music Archive**](https://freemusicarchive.org) | Mixed | Curated free music, filter by license type |
| [**YouTube Audio Library**](https://www.youtube.com/audiolibrary) | Free | Filter "No attribution required" |

> 💡 **Tip:** NCS tracks are great for rhythm games — strong beats, consistent BPM, and built for content creators.

## 📁 Files

| File | Description |
|------|-------------|
| `index.html` | Complete game (HTML + CSS + JS) |
| `sw.js` | Service worker for offline caching |

## 💡 Suggestions

Got ideas? Here's what's on the radar — feel free to suggest more on [Discord](https://discord.gg/aa83vhpC4v)!

- [ ] Chart editor for manual note placement
- [ ] Replay system (save, load, watch past gameplay)
- [ ] Online leaderboards
- [ ] Custom skin/theme support
- [ ] Multiplayer / co-op mode
- [ ] Story mode with progression

## 🐛 Known Issues & Fixes

| Issue | Status | Notes |
|-------|--------|-------|
| — | ✅ All clear | Report issues on Discord! |

---

## 🛠️ Tech Stack

- **Vanilla JavaScript** — no frameworks, no build step
- **Web Audio API** — beat detection & audio decoding
- **Canvas API** — rendering & visualizer
- **IndexedDB** — persistent song storage
- **Service Worker** — offline support

## 🤖 Note

This project was built with the help of AI (opencode). The concept, design decisions, and creative direction are all human-made — the AI handled the implementation.

## 📜 License

MIT — do whatever you want with it.

## 💬 Community

Join the Discord server for updates, feedback, and support:

[![Join Discord](https://img.shields.io/badge/Discord-Join_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/aa83vhpC4v)

---

<p align="center">
  <em>Built with ❤️, rhythm, and AI assistance</em>
</p>
