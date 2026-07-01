# Rhythm Pulse — Project Status

## ✅ Done

### Gameplay
- [x] Achievement sound cooldown (500ms guard to prevent spam)
- [x] Slider/hold note cull fix — use `endTime` instead of start time
- [x] Score normalized to 1,000,000 max, `score_version: 2` added
- [x] Lower BPM detection thresholds for denser charts
- [x] Lower `skipChance` values across all difficulties

### Song Upload & Storage
- [x] Song upload decoupled from score submit (runs unconditionally)
- [x] Duplicate detection in `uploadSongAudio()` via `list()` check
- [x] Supabase storage RLS policy: `anon` can SELECT on `song-files`
- [x] Browse tab uses direct REST API (`POST /storage/v1/object/list/song-files`)
- [x] Browse tab supports manually uploaded audio files (strips extension)
- [x] Browse tab empty state improved (null vs empty, Retry button)
- [x] Difficulty filter buttons hidden in Browse tab
- [x] Removed debug console.log from Browse tab

### Mini Player & Audio
- [x] Redesigned mini player: restart, mute, speed cycle, track index, seek tooltip
- [x] Live waveform visualizer (32-bar frequency canvas)
- [x] Playback speed correctly affects progress bar + time display
- [x] Toggle button visual feedback (`.active-loop` background tint + glow)
- [x] Keyboard shortcuts: Space, ←/→, +/-
- [x] Media Session API: OS media keys + now-playing metadata

### Export & Save
- [x] Export All MP3s button (ZIP download via JSZip)
- [x] Backup created: `backup-20260702-014637.tar.gz`

### Docs & Branding
- [x] Banner SVG redesigned (animated notes, lanes, gradient glow)
- [x] README updated (921 achievements, new features, cleaner format)

## 📌 Next Up
- [ ] Chart editor for manual note placement
- [ ] Replay system (watch past gameplay)
- [ ] Custom skins & themes
- [ ] Multiplayer / co-op
- [ ] Story mode with progression
