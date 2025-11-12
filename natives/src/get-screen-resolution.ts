import { IntRef } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCREEN_RESOLUTION
 *
 * 0x5949C3C031610A30

 * 
 * THIS WILL ALWAYS RETURN 1280x720 REGARDLESS OF THE REAL RESOLUTION THE GAME IS RUNNING AT
 * 
 * int screenresx,screenresy;
 * GET_SCREEN_RESOLUTION(&screenresx,&screenresy);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} x [Ref]
 * @param {IntRef} y [Ref]
 */
export function getScreenResolution(x: IntRef /* ptr */, y: IntRef /* ptr */): void {
	const getScreenResolution_result = Citizen.invokeNative<void>('0x5949C3C031610A30', x.dataView, y.dataView);
	return getScreenResolution_result;
}