import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CHECK_DATA_MANAGER_SUCCEEDED_FOR_HANDLE
 *
 * 0xA845292976402C0F

 * 
 * ------------------------------------------------------------------
 * @param {number} cardType
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkCheckDataManagerSucceededForHandle(cardType: number, gamerHandle: GamerHandle /* ptr */): boolean {
	const networkCheckDataManagerSucceededForHandle_result = Citizen.invokeNative<boolean>('0xA845292976402C0F', cardType, gamerHandle.dataView);
	return networkCheckDataManagerSucceededForHandle_result;
}