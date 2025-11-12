import { IntRef } from '@ivanzaida/structures'

/**
 * PED:GET_PED_MAKEUP_TINT_COLOR
 *
 * 0x091AAB4C71ADE4CD

 * 
 * Input: Makeup color index, value between 0 and 63 (inclusive).
 * Output: RGB values for the makeup color specified in the input.
 * 
 * This is used with the makeup color swatches scaleform.
 * Use `GET_PED_HAIR_TINT_COLOR` to get the hair colors.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getPedMakeupTintColor(tint: number, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getPedMakeupTintColor_result = Citizen.invokeNative<void>('0x091AAB4C71ADE4CD', tint, red.dataView, green.dataView, blue.dataView);
	return getPedMakeupTintColor_result;
}