#!/bin/bash

# Script na optimalizáciu obrázkov v projekte
# Použitie: ./optimize-images.sh

echo "🖼️  Optimalizácia obrázkov..."

# Skontroluj či je nainštalovaný sharp-cli
if ! command -v sharp &> /dev/null; then
    echo "📦 Inštalujem sharp-cli..."
    npm install -g sharp-cli
fi

# Vytvor backup
echo "💾 Vytváram zálohu..."
mkdir -p src/assets/backup
cp src/assets/*.jpg src/assets/backup/ 2>/dev/null || true

# Optimalizuj JPEG obrázky
echo "⚡ Optimalizujem JPEG obrázky..."
for file in src/assets/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  Spracovávam: $filename"
        sharp -i "$file" -o "$file" --jpeg '{"quality": 85, "mozjpeg": true}'
    fi
done

# Vytvor WebP verzie
echo "🎨 Vytváram WebP verzie..."
for file in src/assets/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        echo "  Konvertujem: $filename.jpg → $filename.webp"
        sharp -i "$file" -o "src/assets/$filename.webp" --webp '{"quality": 85}'
    fi
done

# Zisťovanie veľkostí
echo ""
echo "📊 Štatistiky:"
echo "Pôvodné obrázky (backup):"
du -sh src/assets/backup/ 2>/dev/null || echo "  N/A"
echo "Optimalizované JPEG:"
du -sh src/assets/*.jpg 2>/dev/null | awk '{sum+=$1} END {print "  " sum "K"}'
echo "WebP verzie:"
du -sh src/assets/*.webp 2>/dev/null | awk '{sum+=$1} END {print "  " sum "K"}'

echo ""
echo "✅ Hotovo!"
echo "💡 Tip: Porovnaj obrázky v src/assets/ s backup/ a urob commit ak sú OK"
