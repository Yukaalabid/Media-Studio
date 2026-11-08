# Rendering Guide

## Preview
```bash
npm run dev
```

## Render the sample composition
```bash
npm run render
```

## Render a still frame
```bash
npm run still
```

## Validate TypeScript
```bash
npm run typecheck
```

## Output settings
- Composition: `EverydayExplainer`
- Width: 1080
- Height: 1920
- FPS: 30
- Duration: 960 frames (32 seconds)
- Output: `out/everyday-explainer.mp4`

If rendering fails, read the complete terminal error. Check that Node.js, dependencies, and the browser rendering environment are installed. Do not assume a render succeeded merely because the command started.
