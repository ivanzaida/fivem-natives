/**
 * PED:SET_AMBIENT_LAW_PED_ACCURACY_MODIFIER
 *
 * 0xEDC191D9E24A6A2D

 * 
 * ------------------------------------------------------------------
 * @param {number} newAccuracy
 */
export function setAmbientLawPedAccuracyModifier(newAccuracy: number): void {
	const setAmbientLawPedAccuracyModifier_result = Citizen.invokeNative<void>('0xEDC191D9E24A6A2D', newAccuracy);
	return setAmbientLawPedAccuracyModifier_result;
}