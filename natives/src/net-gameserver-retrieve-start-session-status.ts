import { IntRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_RETRIEVE_START_SESSION_STATUS
 *
 * 0xA7237EFE46BDEC7B

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} currentStatus [Ref]
 * @returns {boolean}  
 */
export function netGameserverRetrieveStartSessionStatus(currentStatus: IntRef /* ptr */): boolean {
	const netGameserverRetrieveStartSessionStatus_result = Citizen.invokeNative<boolean>('0xA7237EFE46BDEC7B', currentStatus.dataView);
	return netGameserverRetrieveStartSessionStatus_result;
}