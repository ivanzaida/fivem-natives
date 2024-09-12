import { NetworkIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_ALWAYS_EXISTS_FOR_PLAYER
 *
 * 0x4C48F052678AA7EF

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {PlayerIndex} playerId
 * @param {boolean} alwaysExistsForPlayer
 */
export function setNetworkIdAlwaysExistsForPlayer(networkId: NetworkIndex, playerId: PlayerIndex, alwaysExistsForPlayer: boolean): void {
	const setNetworkIdAlwaysExistsForPlayer_result = Citizen.invokeNative<void>('0x4C48F052678AA7EF', networkId, playerId, alwaysExistsForPlayer);
	return setNetworkIdAlwaysExistsForPlayer_result;
}