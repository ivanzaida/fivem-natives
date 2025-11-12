import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_LEAVE_PED_BEHIND_BEFORE_CUTSCENE
 *
 * 0xBD9FF88287E84727

 * 
 * Leave an AI ped behind in place of the player when they are moving to an MP cutscene
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} keepPickups If true then any portable pickups attached to the player are kept attached to him, otherwise they are detached
 */
export function networkLeavePedBehindBeforeCutscene(player: PlayerIndex, keepPickups: boolean = false): void {
	const networkLeavePedBehindBeforeCutscene_result = Citizen.invokeNative<void>('0xBD9FF88287E84727', player, keepPickups);
	return networkLeavePedBehindBeforeCutscene_result;
}