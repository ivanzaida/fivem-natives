import { IntRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_RETRIEVE_CATALOG_REFRESH_STATUS
 *
 * 0x851E914CBFC1A1DF

 * 
 * Retrieve status from the operation started in NET_GAMESERVER_REFRESH_SERVER_CATALOG. Returns TRUE is status is successfull.
 * Returns FALSE when the status is PENDING/FAILED.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} currentStatus [Ref]
 * @returns {boolean}  
 */
export function netGameserverRetrieveCatalogRefreshStatus(currentStatus: IntRef /* ptr */): boolean {
	const netGameserverRetrieveCatalogRefreshStatus_result = Citizen.invokeNative<boolean>('0x851E914CBFC1A1DF', currentStatus.dataView);
	return netGameserverRetrieveCatalogRefreshStatus_result;
}