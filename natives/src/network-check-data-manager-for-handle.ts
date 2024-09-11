import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CHECK_DATA_MANAGER_FOR_HANDLE
 *
 * 0x53A0D6983FA95432

 * 
 * ------------------------------------------------------------------
 * @param {number} cardType
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkCheckDataManagerForHandle(cardType: number, gamerHandle: GamerHandle /* ptr */): boolean {
	const networkCheckDataManagerForHandle_result = Citizen.invokeNative<boolean>('0x53A0D6983FA95432', cardType, gamerHandle.dataView);
	return networkCheckDataManagerForHandle_result;
}