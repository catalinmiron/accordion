#!/bin/bash

SCRIPT="$(readlink -f "$0")"
SOURCE_DIRECTORY="$(dirname "$SCRIPT")"
PUBLIC_URL="http://127.0.0.1:8000"

if [ ! -f "${SOURCE_DIRECTORY}/.env" ]; then
	echo "Missing .env file" >&2
	exit 1
fi
source ${SOURCE_DIRECTORY}/.env

rm -rf $SOURCE_DIRECTORY/dist

python3 -m http.server 8000 \
    --directory "${SOURCE_DIRECTORY}" &
BUILD_SERVER_1="$!"

expo export --public-url "${PUBLIC_URL}" --dev
kill "${BUILD_SERVER_1}"

python3 -m http.server 8000 \
    --directory "${SOURCE_DIRECTORY}/dist" &
BUILD_SERVER_2="$!"

turtle build:android \
    --keystore-path "${EXPO_ANDROID_KEYSTORE_LOCATION}" \
    --keystore-alias "${EXPO_ANDROID_KEYSTORE_ALIAS}" \
    --public-url "${PUBLIC_URL}/android-index.json" \
    --type apk
kill $BUILD_SERVER_2
