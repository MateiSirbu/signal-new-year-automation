whenToRun="2021-01-01 00:00:00"

currentEpoch=$(date +%s)
targetEpoch=$(date -j -f "%Y-%m-%d %H:%M:%S" "${whenToRun}" +%s)

sleepSecs=$(( $targetEpoch - $currentEpoch ))

clear
echo "Running automation at ${whenToRun}."

npm run driver &

sleep $sleepSecs

printf "Starting automation...\n"
npm run automate

trap 'kill $(jobs -p)' EXIT
