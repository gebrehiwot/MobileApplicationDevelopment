const chapters = {
  1: `
# 📱 Chapter 1: Introduction to Mobile Computing
Mobile development is unique because of:
- 🌐 Mobility — networks fluctuate
- 🔋 Battery constraints
- 🧠 Context awareness — sensors, GPS, accelerometer

## 🏛 Android Architecture
- Linux Kernel
- Hardware Abstraction Layer
- ART Runtime
- Framework APIs

## 🛠 WAY OUT
✔ Change Manifest label  
✔ Install Android Sources  
✔ Rebuild the project  
`,

  2: `
# 🎨 Chapter 2: UI & Design Principles
Learn Material Design 3 (modern Android UI model).

## Layout Systems
- ConstraintLayout (recommended)
- LinearLayout
- FrameLayout

## Multimodal UI
- TTS
- Voice commands
- Gestures

## 🛠 WAY OUT
Create a multilingual greeting app.
`,

  3: `
# 🔗 Chapter 3: Intents & Services
## Intents
- Explicit — navigate screens
- Implicit — open camera, browser

## Services
- Started
- Bound
- Foreground

## 🛠 WAY OUT
Build a 2-screen Intent app.
`,

  4: `
# 💾 Chapter 4: Storage & Databases
## Storage Options
- DataStore
- Room Database
- File Storage

## Sync
Use WorkManager for scheduled sync.

## 🛠 WAY OUT
Build a persistent Notes App.
`,

  5: `
# 🌐 Chapter 5: Networking
## APIs
- REST + JSON
- State Machine (Loading, Success, Error)

## Notifications
- Channels
- Scheduled alarms

## 🛠 WAY OUT
Build a Live News Fetcher.
`,

  6: `
# 🎬 Chapter 6: Graphics & Multimedia
## Graphics
- Canvas API
- Shapes, charts, drawings

## Media
- ExoPlayer
- SoundPool

## 🛠 WAY OUT
Build a multimedia gallery.
`,

  7: `
# 📍 Chapter 7: Location & Maps
## Location APIs
- Fused Location Provider
- Permissions

## Maps
- Markers
- Camera controls

## 🛠 WAY OUT
Build a Local Resource Finder App.
`,

  8: `
# 🚀 Chapter 8: Deployment
## Packaging
- App Bundles (.aab)
- Signing keys

## Optimization
- R8 shrinking
- Memory profiling

## 🛠 FINAL TASK
Generate signed release bundle.
`,
};

function loadChapter(num) {
  const content = document.getElementById("content");
  content.style.animation = "none";
  void content.offsetWidth;
  content.style.animation = "fadeIn 0.6s ease";

  content.innerHTML = `
    <h2>${chapters[num].split("\\n")[1]}</h2>
    <pre>${chapters[num]}</pre>
  `;
}
