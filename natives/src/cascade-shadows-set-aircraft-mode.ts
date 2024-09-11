/**
 * GRAPHICS:CASCADE_SHADOWS_SET_AIRCRAFT_MODE
 *
 * 0x5222710997DF7E10

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function cascadeShadowsSetAircraftMode(enable: boolean): void {
	const cascadeShadowsSetAircraftMode_result = Citizen.invokeNative<void>('0x5222710997DF7E10', enable);
	return cascadeShadowsSetAircraftMode_result;
}