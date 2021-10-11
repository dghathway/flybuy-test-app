## Flybuy Capacitor Sample App
# For testing capacitor-flybuy plugin

To test, please do the following:

1) npm install
2) ionic capacitor add android (or ionic capacitor add ios)
3) npm run build
4) npx cap sync

Then, open xCode or Android Studio, and run as usual

In the project, you can open app.home.ts, and change the value of the flybuy site from 5345 (Lone Tree, CO) if desired. The callPlugin method simulates the way that an ordering site like Qdoba would when placing an order.

api Key is in capacitor.config.ts