/**
 * VEHICLE:CLEAR_VEHICLE_GENERATOR_AREA_OF_INTEREST
 *
 * 0x6317659BFF055A5F

 * 
 * ------------------------------------------------------------------
 */
export function clearVehicleGeneratorAreaOfInterest(): void {
	const clearVehicleGeneratorAreaOfInterest_result = Citizen.invokeNative<void>('0x6317659BFF055A5F', );
	return clearVehicleGeneratorAreaOfInterest_result;
}