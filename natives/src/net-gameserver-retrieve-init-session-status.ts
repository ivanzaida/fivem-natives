import { IntRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_RETRIEVE_INIT_SESSION_STATUS
 *
 * 0x3727730B65065BB9

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} currentStatus [Ref]
 * @returns {boolean}  
 */
export function netGameserverRetrieveInitSessionStatus(currentStatus: IntRef /* ptr */): boolean {
	const netGameserverRetrieveInitSessionStatus_result = Citizen.invokeNative<boolean>('0x3727730B65065BB9', currentStatus.dataView);
	return netGameserverRetrieveInitSessionStatus_result;
}