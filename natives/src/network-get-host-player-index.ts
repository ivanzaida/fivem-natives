import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_HOST_PLAYER_INDEX
 *
 * 0x53A6D90B4FBC585D

 * 
 * ------------------------------------------------------------------
 * @returns {PlayerIndex}  
 */
export function networkGetHostPlayerIndex(): PlayerIndex {
	const networkGetHostPlayerIndex_result = Citizen.invokeNative<PlayerIndex>('0x53A6D90B4FBC585D', );
	return networkGetHostPlayerIndex_result;
}