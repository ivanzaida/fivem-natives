import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:VEHICLE_WAYPOINT_PLAYBACK_RESUME
 *
 * 0x5FC3A3680DA3531A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function vehicleWaypointPlaybackResume(veh: VehicleIndex): void {
	const vehicleWaypointPlaybackResume_result = Citizen.invokeNative<void>('0x5FC3A3680DA3531A', veh);
	return vehicleWaypointPlaybackResume_result;
}