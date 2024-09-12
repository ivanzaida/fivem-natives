import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:VEHICLE_WAYPOINT_PLAYBACK_PAUSE
 *
 * 0x1A33666733F63EE2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function vehicleWaypointPlaybackPause(veh: VehicleIndex): void {
	const vehicleWaypointPlaybackPause_result = Citizen.invokeNative<void>('0x1A33666733F63EE2', veh);
	return vehicleWaypointPlaybackPause_result;
}