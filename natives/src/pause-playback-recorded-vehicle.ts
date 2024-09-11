import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:PAUSE_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x36D3AD4491CD32BA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function pausePlaybackRecordedVehicle(vehicle: VehicleIndex): void {
	const pausePlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x36D3AD4491CD32BA', vehicle);
	return pausePlaybackRecordedVehicle_result;
}