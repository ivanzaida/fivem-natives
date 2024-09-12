import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:REPLACE_HUD_COLOUR_WITH_RGBA
 *
 * 0x2BC0725CAF2E0D6B

 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} destHudColour
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alphaParam
 */
export function replaceHudColourWithRgba(destHudColour: EHudColours | number, red: number, green: number, blue: number, alphaParam: number): void {
	const replaceHudColourWithRgba_result = Citizen.invokeNative<void>('0x2BC0725CAF2E0D6B', destHudColour, red, green, blue, alphaParam);
	return replaceHudColourWithRgba_result;
}