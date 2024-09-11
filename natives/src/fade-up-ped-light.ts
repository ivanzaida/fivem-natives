/**
 * GRAPHICS:FADE_UP_PED_LIGHT
 *
 * 0xAE634DE5D86EE96A

 * 
 * ------------------------------------------------------------------
 * @param {number} seconds Timetaken for the ped light to fade up
 */
export function fadeUpPedLight(seconds: number = 4): void {
	const fadeUpPedLight_result = Citizen.invokeNative<void>('0xAE634DE5D86EE96A', seconds);
	return fadeUpPedLight_result;
}