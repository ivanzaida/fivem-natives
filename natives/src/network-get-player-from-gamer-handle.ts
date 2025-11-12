import { GamerHandle, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_FROM_GAMER_HANDLE
 *
 * 0xA34132DD5D4FE383

 * 
 * Returns player index of player in session matching handle (-1 if not in session)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {PlayerIndex}  
 */
export function networkGetPlayerFromGamerHandle(gamerHandle: GamerHandle /* ptr */): PlayerIndex {
	const networkGetPlayerFromGamerHandle_result = Citizen.invokeNative<PlayerIndex>('0xA34132DD5D4FE383', gamerHandle.dataView);
	return networkGetPlayerFromGamerHandle_result;
}