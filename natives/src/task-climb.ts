import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_CLIMB
 *
 * 0x345C12E1D643634F

 * 
 * The ped needs to be positioned and oriented so that a jump will locate an edge for the ped to grab.
 * If an edge can’t be found, the ped will just do a normal jump and land. If an edge can be found then the ped will climb and then stand on top of the found edge.
 * Don't place the ped too far from the object you want him to climb, even if the player can make it and you set UsePlayerLaunchForce to TRUE, it won't guarantee that the ped will make it.
 * 
 * Climbs or vaults the nearest thing.
 * usePlayerLaunchForce is unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} usePlayerLaunchForce
 */
export function taskClimb(ped: PedIndex, usePlayerLaunchForce: boolean): void {
	const taskClimb_result = Citizen.invokeNative<void>('0x345C12E1D643634F', ped, usePlayerLaunchForce);
	return taskClimb_result;
}