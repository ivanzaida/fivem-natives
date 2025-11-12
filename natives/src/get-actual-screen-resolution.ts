import { IntRef } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_ACTUAL_SCREEN_RESOLUTION
 *
 * 0x21564F65F997D833

 * 
 * Returns current screen resolution.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} x [Ref]
 * @param {IntRef} y [Ref]
 */
export function getActualScreenResolution(x: IntRef /* ptr */, y: IntRef /* ptr */): void {
	const getActualScreenResolution_result = Citizen.invokeNative<void>('0x21564F65F997D833', x.dataView, y.dataView);
	return getActualScreenResolution_result;
}