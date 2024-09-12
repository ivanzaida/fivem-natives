/**
 * VEHICLE:SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER
 *
 * 0x3511D41891789DA6

 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void {
	const setCarHighSpeedBumpSeverityMultiplier_result = Citizen.invokeNative<void>('0x3511D41891789DA6', multiplier);
	return setCarHighSpeedBumpSeverityMultiplier_result;
}