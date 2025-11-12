import { FloatRef } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCRIPT_GFX_ALIGN_POSITION
 *
 * 0x2BF75F235283775A

 * 
 * Get a position on screen given the current alignment setup
 * x, y : Input x and y coords.
 * newX, newY : Calculate x and y coords given current alignment setup
 * 
 * Calculates the effective X/Y fractions when applying the values set by SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {FloatRef} newX [Ref]
 * @param {FloatRef} newY [Ref]
 */
export function getScriptGfxAlignPosition(x: number, y: number, newX: FloatRef /* ptr */, newY: FloatRef /* ptr */): void {
	const getScriptGfxAlignPosition_result = Citizen.invokeNative<void>('0x2BF75F235283775A', x, y, newX.dataView, newY.dataView);
	return getScriptGfxAlignPosition_result;
}