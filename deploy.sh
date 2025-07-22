#!/bin/bash

# Vue 앱 빌드 및 복사
echo "[1/4] Vue 앱 빌드"
npm run build

echo "[2/4] Vue 배포 폴더 복사"
rm -rf deploy-vue
mkdir deploy-vue
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  xcopy /E /I /Y dist deploy-vue
else
  cp -r dist/* deploy-vue/
fi

# Storybook 빌드 및 복사
echo "[3/4] Storybook 빌드"
npm run build-storybook

echo "[4/4] Storybook 배포 폴더 복사"
rm -rf deploy-storybook
mkdir deploy-storybook
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  xcopy /E /I /Y storybook-static deploy-storybook
else
  cp -r storybook-static/* deploy-storybook/
fi

echo "[Vue 배포]"
cd deploy-vue
npx vercel --prod --confirm
cd ..

echo "[Storybook 배포]"
cd deploy-storybook
npx vercel --prod --confirm
cd ..

echo "배포 완료! Vercel 대시보드에서 각각의 URL을 확인하세요." 