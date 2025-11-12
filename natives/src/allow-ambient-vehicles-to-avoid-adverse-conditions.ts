/**
 * VEHICLE:ALLOW_AMBIENT_VEHICLES_TO_AVOID_ADVERSE_CONDITIONS
 *
 * 0xCD01772CECE254A3

 * 
 * Depricated, this function no longer does anything, left in to not break scripts
 * 
 * This native doesn't seem to do anything, might be a debug-only native.
 * 
 * Confirmed, it is a debug native.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function allowAmbientVehiclesToAvoidAdverseConditions(allow: boolean): void {
	const allowAmbientVehiclesToAvoidAdverseConditions_result = Citizen.invokeNative<void>('0xCD01772CECE254A3', allow);
	return allowAmbientVehiclesToAvoidAdverseConditions_result;
}