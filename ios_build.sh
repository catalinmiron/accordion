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

turtle build:ios \
    --team-id "${EXPO_IOS_TEAM_ID}" \
    --dist-p12-path "${EXPO_IOS_DIST_P12_FILE}" \
    --provisioning-profile-path "${EXPO_IOS_PROVISION_FILE}" \
    --public-url "${PUBLIC_URL}/ios-index.json"
kill $BUILD_SERVER_2
