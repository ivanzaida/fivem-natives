import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:UNPAUSE_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x937DE6A451B47D92

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function unpausePlaybackRecordedVehicle(vehicle: VehicleIndex): void {
	const unpausePlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x937DE6A451B47D92', vehicle);
	return unpausePlaybackRecordedVehicle_result;
}