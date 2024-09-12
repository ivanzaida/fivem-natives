import { VehicleIndex, RecordingId } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_CURRENT_PLAYBACK_FOR_VEHICLE
 *
 * 0x0008A5B9B95FED93

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {RecordingId}  
 */
export function getCurrentPlaybackForVehicle(vehicle: VehicleIndex): RecordingId {
	const getCurrentPlaybackForVehicle_result = Citizen.invokeNative<RecordingId>('0x0008A5B9B95FED93', vehicle);
	return getCurrentPlaybackForVehicle_result;
}