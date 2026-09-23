#!/bin/bash

# Instala un componente de shadcn/ui y corrige automáticamente
# los problemas de alias conocidos en este proyecto.
#
# Uso: ./scripts/add-ui.sh nombre-del-componente

if [ -z "$1" ]; then
  echo "Uso: ./scripts/add-ui.sh nombre-del-componente"
  exit 1
fi

echo "Instalando componente: $1"
npx shadcn@latest add "$1"

# Si el CLI creó la carpeta mal ubicada "@/", movemos su contenido a src/
if [ -d "./@" ]; then
  echo "Corrigiendo ubicación de archivos..."
  mkdir -p src/components/ui src/lib src/hooks
  [ -d "./@/components/ui" ] && mv ./@/components/ui/* src/components/ui/ 2>/dev/null
  [ -d "./@/lib" ] && mv ./@/lib/* src/lib/ 2>/dev/null
  [ -d "./@/hooks" ] && mv ./@/hooks/* src/hooks/ 2>/dev/null
  rm -rf ./@
fi

# Corregimos el import roto de "cn" en todos los componentes de ui
echo "Corrigiendo imports de cn..."
find src/components/ui -name "*.tsx" -exec sed -i '' 's/from "cn"/from "@\/lib\/utils"/g' {} \;

echo "Listo."