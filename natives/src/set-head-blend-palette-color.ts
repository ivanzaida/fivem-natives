import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_HEAD_BLEND_PALETTE_COLOR
 *
 * 0xA3C0950202881572

 * 
 * p4 seems to vary from 0 to 3.
 * Preview: https://gfycat.com/MaleRareAmazonparrot
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} color
 */
export function setHeadBlendPaletteColor(ped: PedIndex, red: number, green: number, blue: number, color: number = 0): void {
	const setHeadBlendPaletteColor_result = Citizen.invokeNative<void>('0xA3C0950202881572', ped, red, green, blue, color);
	return setHeadBlendPaletteColor_result;
}