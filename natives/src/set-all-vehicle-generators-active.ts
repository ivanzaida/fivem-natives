/**
 * VEHICLE:SET_ALL_VEHICLE_GENERATORS_ACTIVE
 *
 * 0x5A65DF56B098A5F1

 * 
 * ------------------------------------------------------------------
 */
export function setAllVehicleGeneratorsActive(): void {
	const setAllVehicleGeneratorsActive_result = Citizen.invokeNative<void>('0x5A65DF56B098A5F1', );
	return setAllVehicleGeneratorsActive_result;
}