import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_FALL_DISTANCE_TO_TRIGGER_RAGDOLL_OVERRIDE
 *
 * 0xA9FF721056B7254E

 * 
 * This function alters the minimum fall height that causes the ped to trigger ragdoll.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} distance
 */
export function setPlayerFallDistanceToTriggerRagdollOverride(player: PlayerIndex, distance: number): void {
	const setPlayerFallDistanceToTriggerRagdollOverride_result = Citizen.invokeNative<void>('0xA9FF721056B7254E', player, distance);
	return setPlayerFallDistanceToTriggerRagdollOverride_result;
}