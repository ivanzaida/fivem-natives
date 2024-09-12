import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
 *
 * 0x6956712D887FB12E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function vehicleWaypointPlaybackUseDefaultSpeed(veh: VehicleIndex): void {
	const vehicleWaypointPlaybackUseDefaultSpeed_result = Citizen.invokeNative<void>('0x6956712D887FB12E', veh);
	return vehicleWaypointPlaybackUseDefaultSpeed_result;
}