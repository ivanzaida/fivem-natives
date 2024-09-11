/**
 * VEHICLE:_SET_ATTACHED_VEHICLE_TO_TOW_TRUCK_ARM
 *
 * 0x48BD57D0DD17786A

 * 
 * ------------------------------------------------------------------
 */
export function setAttachedVehicleToTowTruckArm(): void {
	const setAttachedVehicleToTowTruckArm_result = Citizen.invokeNative<void>('0x48BD57D0DD17786A', );
	return setAttachedVehicleToTowTruckArm_result;
}