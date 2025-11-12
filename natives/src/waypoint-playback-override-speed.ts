import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_OVERRIDE_SPEED
 *
 * 0x3A4A0A988D382998

 * 
 * Overrides the speed at which the ped moves, ignoring the speeds recorded in the route
 * bDontAllowSlowingForCorners - allows the ped to slow for corners; without this peds may have trouble keeping to their routes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moveBlendRatio
 * @param {boolean} dontAllowSlowingForCorners
 */
export function waypointPlaybackOverrideSpeed(ped: PedIndex, moveBlendRatio: number, dontAllowSlowingForCorners: boolean = false): void {
	const waypointPlaybackOverrideSpeed_result = Citizen.invokeNative<void>('0x3A4A0A988D382998', ped, moveBlendRatio, dontAllowSlowingForCorners);
	return waypointPlaybackOverrideSpeed_result;
}