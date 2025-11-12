import { IntRef } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HAIR_TINT_COLOR
 *
 * 0xB062D1D08D9CC751

 * 
 * Input: Haircolor index, value between 0 and 63 (inclusive).
 * Output: RGB values for the haircolor specified in the input.
 * 
 * This is used with the hair color swatches scaleform.
 * Use `GET_PED_MAKEUP_TINT_COLOR` to get the makeup colors.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getPedHairTintColor(tint: number, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getPedHairTintColor_result = Citizen.invokeNative<void>('0xB062D1D08D9CC751', tint, red.dataView, green.dataView, blue.dataView);
	return getPedHairTintColor_result;
}