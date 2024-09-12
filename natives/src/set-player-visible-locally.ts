import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_PLAYER_VISIBLE_LOCALLY
 *
 * 0x8DDE9E4E8A102CD9

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @param {boolean} includePlayersVehicle
 */
export function setPlayerVisibleLocally(playerId: PlayerIndex, includePlayersVehicle: boolean = false): void {
	const setPlayerVisibleLocally_result = Citizen.invokeNative<void>('0x8DDE9E4E8A102CD9', playerId, includePlayersVehicle);
	return setPlayerVisibleLocally_result;
}