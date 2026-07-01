<p align="center">
  <img src="banner.svg" alt="Rhythm Pulse" width="100%">
</p>

<p align="center">
  <a href="https://sunnierarcher38.github.io/rhythm-pulse/"><img src="https://img.shields.io/badge/%F0%9F%8E%AE%20Play%20Now-7c3aed?style=for-the-badge&logoColor=white" alt="Play Now"></a>
  <a href="https://discord.gg/aa83vhpC4v"><img src="https://img.shields.io/badge/GENIMPACT-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="GENIMPACT"></a>
  <img src="https://img.shields.io/github/last-commit/SunnierArcher38/rhythm-pulse?color=c44dff&style=for-the-badge" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/SunnierArcher38/rhythm-pulse?color=50fa7b&style=for-the-badge" alt="Size">
</p>

Drop any music file and start playing in seconds. No install, no signup, no setup.

---

## 🎮 What is Rhythm Pulse?

A browser-based rhythm game that auto-generates beat-matched charts from your own music. Drag in an MP3, and it detects the BPM, generates 4 difficulties, and throws you into gameplay instantly — like osu!mania meets FNF, but with your songs. Everything runs in a single HTML file.

## ✨ Why it's cool

- **Your music, your charts** — drop any song, get instant beat-synced gameplay
- **921 achievements** with sound effects and in-game popups
- **Online leaderboards** — compete globally with scores normalized to 1,000,000 max
- **Song sharing** — play others' songs from the Browse tab via Supabase cloud
- **Mini player** with waveform visualizer, speed control, seek, loop, and shuffle
- **Keyboard shortcuts & Media Session API** — control playback with OS media keys
- **Works offline** — songs save forever in your browser via IndexedDB + Service Worker
- **Single HTML file** — zero dependencies, runs anywhere
- **Mobile touch support** — play on your phone with on-screen lanes

## 🔥 Features at a glance

### 🎮 Gameplay
- **4K–8K lanes** — customize your layout
- **Downscroll or Upscroll** — your preference
- **4 difficulties** per song (Easy → Insane)
- **Modifiers** — Mirror, Random, Hidden, Sudden
- **Practice mode** with speed control, loop, and minimap
- **Autoplay & Metronome** for learning
- **Hold notes** with press-and-release judgment
- **Score normalized to 1,000,000** — fair competition across songs

### 🎨 Visuals
- **Beat-reactive zoom** — the screen pulses with the music
- **Radial visualizer** — 4-way mirrored spectrum with side dimming
- **Combo effects** — screen shakes, particle trails, lane glow
- **Waveform visualizer** — live frequency bars in the mini player
- **Multiple color schemes & note styles** — make it yours
- **Key press FX** — satisfying visual feedback on every hit

### 🎵 Your Music Library
- **Drag & drop** any audio file
- **Built-in music browser** — search and download from Audius (free & legal)
- **Free music sources** — links to NCS, Pixabay, Incompetech, and more
- **Auto BPM detection** with autocorrelation for accurate charts
- **Smart chart generation** — 4 difficulty levels from one detection
- **Mini player** — waveform visualizer, prev/next, loop, shuffle, seek, volume
- **Favorites & sorting** — organize by name, BPM, or length
- **Regenerate charts** — re-detect BPM and rebuild on demand
- **Export/Import** individual songs, full library backups, or batch MP3 export

### 🏆 Progression & Community
- **921 achievements** — progressive unlocks with cumulative stats
- **Global leaderboards** — Overall (combined best) and Per-Song views
- **Browse tab** — discover and download songs uploaded by other players
- **Cloud save/load** — encrypted sync across devices
- **Grades** (S/A/B/C/D/F) with detailed timing graph
- **Copy score to clipboard** — flex on your friends
- **Save codes** — transfer settings between devices

## ⌨ Controls

| Mode | Keys |
|------|------|
| **4K** | `D` `F` `J` `K` |
| **5K** | `D` `F` `Space` `J` `K` |
| **6K** | `S` `D` `F` `J` `K` `L` |
| **7K** | `S` `D` `F` `Space` `J` `K` `L` |
| **8K** | `S` `D` `F` `Space` `J` `K` `L` `;` |

### Mini player shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `←` `→` | Seek ±5 seconds |
| `+` `-` | Volume up / down |

> Hold notes require sustained key press — judgment on release.

## 📊 Judgments & Scoring

| Judgment | Window | Base Points |
|----------|--------|-------------|
| ✨ **Marvelous** | ±22ms | 350 |
| 💎 **Perfect** | ±45ms | 300 |
| 🟢 **Great** | ±90ms | 200 |
| 🔵 **Good** | ±135ms | 100 |
| 🔴 **Miss** | ±180ms | 0 |

- Combo multiplier ramps up to **×4** at 50+ combo
- Final score normalized to **1,000,000 max** for fair leaderboard comparison

## 🎵 Free Music Sources

All copyright-free or permissive license:

| Source | License | Best for |
|--------|---------|----------|
| [**NCS**](https://ncs.io) | Free (credit) | Electronic, strong beats for rhythm games |
| [**Pixabay Music**](https://pixabay.com/music/) | No attribution | Broad genres, safe pick |
| [**Incompetech**](https://incompetech.com/) | CC BY | Kevin MacLeod's massive collection |
| [**OpenGameArt**](https://opengameart.org) | CC / CC0 | Game-focused tracks |
| [**Free Music Archive**](https://freemusicarchive.org) | Mixed | Curated, filterable |
| [**YouTube Audio Library**](https://www.youtube.com/audiolibrary) | Free | No-attribution filter available |

## 📁 What's in the box

- **`index.html`** — the entire game (open and play)
- **`sw.js`** — service worker for offline caching
- **`banner.svg`** — the repo banner you see above

## 💡 Coming soon

Ideas on the horizon — hop on [Discord](https://discord.gg/aa83vhpC4v) to vote or suggest:

- [ ] Chart editor for manual note placement
- [ ] Replay system (watch past gameplay)
- [ ] Custom skins & themes
- [ ] Multiplayer / co-op
- [ ] Story mode with progression

## 🛠 Built with

Vanilla JS, Web Audio API, Canvas API, IndexedDB, Service Workers, Audius API, Supabase (storage + leaderboards), Media Session API — **zero frameworks, zero build step**.

## 📜 License

MIT — go wild.

<p align="center">
  <a href="https://sunnierarcher38.github.io/rhythm-pulse/"><img src="https://img.shields.io/badge/%F0%9F%8E%AE%20Play%20Now-7c3aed?style=for-the-badge&logoColor=white" alt="Play Now"></a>
  <a href="https://discord.gg/aa83vhpC4v"><img src="https://img.shields.io/badge/GENIMPACT-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="GENIMPACT"></a>
</p>
