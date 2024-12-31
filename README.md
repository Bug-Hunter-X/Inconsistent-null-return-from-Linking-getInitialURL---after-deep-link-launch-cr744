# Inconsistent null return from Linking.getInitialURL() in Expo

This repository demonstrates a bug where `Linking.getInitialURL()` in Expo inconsistently returns `null` when the app is launched via a deep link.  The issue is intermittent and makes reliable deep link handling difficult.

## Bug Description
The app is launched from a deep link, but `Linking.getInitialURL()` in the `App` component returns `null`, preventing the processing of the intended URL.

## Steps to Reproduce
1. Clone this repository.
2. Run the app using Expo CLI (`expo start`).
3. Send a deep link to the app (e.g., `myapp://somepath`).
4. Observe that `Linking.getInitialURL()` may return `null` instead of the deep link URL.

## Expected Behavior
`Linking.getInitialURL()` should reliably return the deep link URL used to launch the app.

## Actual Behavior
`Linking.getInitialURL()` sometimes returns `null`, causing the app to fail to process the deep link.

## Solution
The solution involves using `Linking.addEventListener` to listen for deep links asynchronously, providing a more reliable approach compared to relying solely on `Linking.getInitialURL()`, which is subject to timing issues.  See the `bugSolution.js` file for the corrected implementation.