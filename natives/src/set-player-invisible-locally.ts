import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_PLAYER_INVISIBLE_LOCALLY
 *
 * 0x903DAFB544C5CA0D

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @param {boolean} includePlayersVehicle
 */
export function setPlayerInvisibleLocally(playerId: PlayerIndex, includePlayersVehicle: boolean = false): void {
	const setPlayerInvisibleLocally_result = Citizen.invokeNative<void>('0x903DAFB544C5CA0D', playerId, includePlayersVehicle);
	return setPlayerInvisibleLocally_result;
}