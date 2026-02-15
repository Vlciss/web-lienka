# Jasličky Lienka

Webová stránka pre jasličky s moderným dizajnom a responzívnym rozhraním.

## 🚀 Technológie

Tento projekt je postavený na:

- **Vite** - rýchly build nástroj
- **React 18** - UI knižnica
- **TypeScript** - type-safe JavaScript
- **Tailwind CSS** - utility-first CSS framework
- **shadcn/ui** - komponenty UI
- **React Router** - routing

## 📦 Inštalácia

```bash
# Nainštalujte závislosti
npm install

# Spustite vývojový server
npm run dev

# Build pre produkciu
npm run build

# Náhľad produkčnej verzie
npm run preview
```

## 🌐 Nasadenie na GitHub Pages

### Automatické nasadenie cez GitHub Actions

1. **Povoľte GitHub Pages v nastaveniach repozitára:**
   - Prejdite do Settings > Pages
   - V časti "Source" vyberte "GitHub Actions"

2. **GitHub Actions workflow je už pripravený:**
   - Súbor `.github/workflows/deploy.yml` automaticky nasadzuje zmeny
   - Pri každom push do main vetvy sa vytvorí nový build

3. **Nastavte správny base path:**
   - V súbore `vite.config.ts` je nastavený `base: '/web-lienka/'`
   - Ak má váš repozitár iný názov, zmeňte ho na `base: '/nazov-vasho-repo/'`

4. **Push zmeny do repozitára:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

Stránka bude dostupná na: `https://<username>.github.io/web-lienka/`

**Dôležité:** Ak používate vlastnú doménu, nastavte v `vite.config.ts` hodnotu `base: '/'`

### Manuálne nasadenie

```bash
# Build projektu
npm run build

# Nasadenie do gh-pages vetvy
npm install -g gh-pages
gh-pages -d dist
```

## 📝 Skripty

- `npm run dev` - spustí vývojový server na porte 8080
- `npm run build` - vytvorí produkčnú verziu
- `npm run build:dev` - vytvorí development verziu
- `npm run preview` - náhľad produkčnej verzie
- `npm run lint` - kontrola kódu
- `npm run test` - spustí testy
- `npm run test:watch` - spustí testy v watch režime

## ⚡ Optimalizácia výkonu

Projekt obsahuje implementované optimalizácie pre rýchle načítavanie:
- ✅ Lazy loading obrázkov
- ✅ Code splitting
- ✅ Minifikácia a kompresia
- ✅ Async image decoding

Pre ďalšie optimalizácie pozri [OPTIMIZATION.md](OPTIMIZATION.md).

**Optimalizácia obrázkov:**
```bash
chmod +x optimize-images.sh
./optimize-images.sh
```

## 📁 Štruktúra projektu

```
src/
├── components/       # React komponenty
│   ├── ui/          # Základné UI komponenty (shadcn/ui)
│   └── ...          # Sekcie stránky
├── pages/           # Stránky aplikácie
├── hooks/           # Custom React hooks
├── lib/             # Utility funkcie
└── assets/          # Obrázky a statické súbory
```

## ⚙️ Konfigurácia

Projekt používa:
- `vite.config.ts` - konfigurácia Vite
- `tailwind.config.ts` - konfigurácia Tailwind CSS
- `tsconfig.json` - konfigurácia TypeScript
- `components.json` - konfigurácia shadcn/ui

## 🔧 Vývoj

Pre lokálny vývoj:

1. Klonujte repozitár
2. Nainštalujte závislosti: `npm install`
3. Spustite dev server: `npm run dev`
4. Otvorte http://localhost:8080

## 📄 Licencia

Tento projekt je súkromný a určený pre Jasličky Lienka.
