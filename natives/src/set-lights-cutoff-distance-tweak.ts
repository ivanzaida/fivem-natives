/**
 * VEHICLE:SET_LIGHTS_CUTOFF_DISTANCE_TWEAK
 *
 * 0x1BE70491AADA5F80

 * 
 * ------------------------------------------------------------------
 * @param {number} dist
 */
export function setLightsCutoffDistanceTweak(dist: number): void {
	const setLightsCutoffDistanceTweak_result = Citizen.invokeNative<void>('0x1BE70491AADA5F80', dist);
	return setLightsCutoffDistanceTweak_result;
}