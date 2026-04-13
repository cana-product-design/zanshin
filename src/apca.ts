/**
 * APCA-W3 contrast algorithm — standalone, zero dependencies.
 * Implements the SAPC-0.0.98G-4g specification (SA = 1.75).
 *
 * Returns a signed Lc value:
 *   positive → dark text on light background (BoW)
 *   negative → light text on dark background (WoB)
 *
 * Absolute thresholds for interactive UI elements: |Lc| ≥ 45
 */

function sRGBtoLin(channel: number): number {
  const v = channel / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function relativeLuminance(r: number, g: number, b: number): number {
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
}

export function hexToRGB(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

export function computeAPCA(fgHex: string, bgHex: string): number {
  const [fr, fg, fb] = hexToRGB(fgHex);
  const [br, bg_, bb] = hexToRGB(bgHex);

  const Ytxt = relativeLuminance(fr, fg, fb);
  const Ybg  = relativeLuminance(br, bg_, bb);

  // Constants
  const exTxt    = 0.584;
  const exBg     = 0.525;
  const blkThrs  = 0.022;
  const blkClmp  = 1.414;
  const scaleBoW = 1.14;
  const scaleWoB = 1.14;
  const loConThrs   = 0.001;
  const loConFactor = 1.0 / 1.618;
  const loConOffset = 0.27;
  const deltaLumMin = 0.0005;

  if (Math.abs(Ybg - Ytxt) < deltaLumMin) return 0;

  let adjTxt = Ytxt;
  let adjBg  = Ybg;

  if (adjTxt < blkThrs) adjTxt += Math.pow(blkThrs - adjTxt, blkClmp);
  if (adjBg  < blkThrs) adjBg  += Math.pow(blkThrs - adjBg,  blkClmp);

  let SAPC = 0;
  if (adjBg > adjTxt) {
    // Dark text on light background (BoW) → positive Lc
    SAPC = (Math.pow(adjBg, exBg) - Math.pow(adjTxt, exTxt)) * scaleBoW;
    if (SAPC < loConThrs) return 0;
    if (SAPC < 0.1) SAPC -= SAPC * loConFactor * loConOffset;
  } else {
    // Light text on dark background (WoB) → negative Lc
    SAPC = (Math.pow(adjBg, exBg) - Math.pow(adjTxt, exTxt)) * scaleWoB;
    if (SAPC > -loConThrs) return 0;
    if (SAPC > -0.1) SAPC -= SAPC * loConFactor * loConOffset;
  }

  return SAPC * 100;
}

/** Returns true when |Lc| meets the given threshold */
export function meetsThreshold(lc: number, threshold: number): boolean {
  return Math.abs(lc) >= threshold;
}
