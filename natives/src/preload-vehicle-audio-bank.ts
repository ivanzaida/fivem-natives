/**
 * AUDIO:PRELOAD_VEHICLE_AUDIO_BANK
 *
 * 0xE84254DC19B3CA6B

 * 
 * ------------------------------------------------------------------
 * @param {number} vehicleModelNameHash
 */
export function preloadVehicleAudioBank(vehicleModelNameHash: number): void {
	const preloadVehicleAudioBank_result = Citizen.invokeNative<void>('0xE84254DC19B3CA6B', vehicleModelNameHash);
	return preloadVehicleAudioBank_result;
}