import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:REPLACE_HUD_COLOUR
 *
 * 0x1800980A1FBB4257

 * 
 * makes hudColorIndex2 color into hudColorIndex color
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} destHudColour
 * @param {EHudColours} srcHudColour
 */
export function replaceHudColour(destHudColour: EHudColours | number, srcHudColour: EHudColours | number): void {
	const replaceHudColour_result = Citizen.invokeNative<void>('0x1800980A1FBB4257', destHudColour, srcHudColour);
	return replaceHudColour_result;
}