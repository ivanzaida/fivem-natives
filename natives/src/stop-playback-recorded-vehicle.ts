import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:STOP_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x1D2DAF2A41FFC4A0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function stopPlaybackRecordedVehicle(vehicle: VehicleIndex): void {
	const stopPlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x1D2DAF2A41FFC4A0', vehicle);
	return stopPlaybackRecordedVehicle_result;
}