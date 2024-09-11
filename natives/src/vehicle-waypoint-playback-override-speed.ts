import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED
 *
 * 0x2A62B5809D44FA48

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {number} speed
 */
export function vehicleWaypointPlaybackOverrideSpeed(veh: VehicleIndex, speed: number): void {
	const vehicleWaypointPlaybackOverrideSpeed_result = Citizen.invokeNative<void>('0x2A62B5809D44FA48', veh, speed);
	return vehicleWaypointPlaybackOverrideSpeed_result;
}