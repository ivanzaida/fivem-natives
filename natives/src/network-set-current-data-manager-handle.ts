import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_CURRENT_DATA_MANAGER_HANDLE
 *
 * 0x9215F2CB541DA81C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkSetCurrentDataManagerHandle(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkSetCurrentDataManagerHandle_result = Citizen.invokeNative<boolean>('0x9215F2CB541DA81C', gamerHandle.dataView);
	return networkSetCurrentDataManagerHandle_result;
}