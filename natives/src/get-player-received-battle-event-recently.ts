import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_RECEIVED_BATTLE_EVENT_RECENTLY
 *
 * 0x992BFEB6732434E5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} time
 * @param {boolean} includeLocalEvents
 * @returns {boolean}  
 */
export function getPlayerReceivedBattleEventRecently(player: PlayerIndex, time: number, includeLocalEvents: boolean = false): boolean {
	const getPlayerReceivedBattleEventRecently_result = Citizen.invokeNative<boolean>('0x992BFEB6732434E5', player, time, includeLocalEvents);
	return getPlayerReceivedBattleEventRecently_result;
}