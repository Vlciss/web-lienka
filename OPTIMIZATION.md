# ⚡ Optimalizácie výkonu

Tento dokument popisuje implementované optimalizácie a ďalšie odporúčania.

## ✅ Implementované optimalizácie

### 1. **Lazy Loading obrázkov**
- ✅ Galéria používa `loading="lazy"` 
- ✅ Hero obrázok používa `fetchPriority="high"` pre prioritné načítanie
- ✅ Všetky obrázky používajú `decoding="async"`

### 2. **Code Splitting**
- ✅ Vite automaticky splituje bundle
- ✅ React vendor bundle oddelený od UI vendor bundle
- ✅ CSS code splitting zapnutý

### 3. **Build optimalizácie**
- ✅ Terser minifikácia s odstránením console.log
- ✅ Assets inline limit 4KB
- ✅ Drop debugger statements

### 4. **Network optimalizácie**
- ✅ DNS prefetch pre Google Fonts
- ✅ Preconnect pre kritické domény

## 🚀 Ďalšie odporúčania

### 1. **Komprimujte obrázky (Najväčší impact!)**

**Aktuálne veľkosti:**
- hero-kids.jpg: ~246 KB
- gallery-*.jpg: ~44-108 KB

**Odporúčané:**
Použite online nástroje na kompresi:
- [TinyPNG](https://tinypng.com) - stratová kompresia
- [Squoosh](https://squoosh.app) - pokročilá kompresia
- Alebo príkazom: `npm install -g sharp-cli && sharp -i src/assets/*.jpg -o src/assets/optimized/`

**Cieľ:** Znížiť obrázky o 50-70% bez viditeľnej straty kvality.

### 2. **Konvertujte do WebP formátu**

WebP má o 25-35% menšiu veľkosť než JPEG:

```bash
# Príklad konverzie
npm install -g sharp-cli
for file in src/assets/*.jpg; do
  sharp -i "$file" -o "${file%.jpg}.webp" --webp
done
```

Potom aktualizujte komponenty:
```tsx
<img 
  src={heroKids}
  srcSet={`${heroKidsWebP} 1x`}
  alt="..."
/>
```

### 3. **Responsive Images**

Použite rôzne veľkosti pre mobile/desktop:

```tsx
<img 
  src={heroKids}
  srcSet={`
    ${heroKidsSmall} 640w,
    ${heroKidsMedium} 1024w,
    ${heroKidsLarge} 1920w
  `}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  alt="..."
/>
```

### 4. **CDN pre statické súbory**

Použite CDN (Cloudflare, Netlify) pre:
- Rýchlejšie načítanie
- Automatická kompresia (Brotli/Gzip)
- Edge caching

### 5. **Pridajte Service Worker**

Pre offline support a rýchlejšie opakované načítanie:
```bash
npm install vite-plugin-pwa
```

## 📊 Meranie výkonu

### Google Lighthouse
```bash
npm run build
npm run preview
# Otvorte Chrome DevTools > Lighthouse > Run Analysis
```

**Cieľové skóre:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Webpagetest.org
Test reálneho výkonu z rôznych lokácií.

## 🎯 Prioritný action plan

1. **Komprimujte všetky obrázky** → Úspora ~200-300 KB ⭐⭐⭐
2. **Použite WebP formát** → Ďalšia úspora ~50-100 KB ⭐⭐
3. **Responsive images** → Úspora na mobile ~150 KB ⭐⭐
4. **CDN** → Rýchlejšie načítanie globálne ⭐

## ⚡ Očakávané výsledky

**Pred optimalizáciou:**
- Bundle size: ~320 KB
- Images: ~780 KB
- **Total: ~1.1 MB**
- Load time (3G): ~8-10s

**Po optimalizácii:**
- Bundle size: ~280 KB (minifikácia)
- Images: ~300 KB (kompresia + WebP)
- **Total: ~580 KB**
- Load time (3G): ~3-4s

**Zlepšenie: ~50% rýchlejšie načítanie! 🚀**
