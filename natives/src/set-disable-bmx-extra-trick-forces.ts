/**
 * VEHICLE:SET_DISABLE_BMX_EXTRA_TRICK_FORCES
 *
 * 0xB65B0A6A52A484B5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableExtraTrickForces
 */
export function setDisableBmxExtraTrickForces(disableExtraTrickForces: boolean): void {
	const setDisableBmxExtraTrickForces_result = Citizen.invokeNative<void>('0xB65B0A6A52A484B5', disableExtraTrickForces);
	return setDisableBmxExtraTrickForces_result;
}