/**
 * NETSHOPPING:NET_GAMESERVER_REFRESH_SERVER_CATALOG
 *
 * 0xE9D0D38A52D47D12

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverRefreshServerCatalog(): boolean {
	const netGameserverRefreshServerCatalog_result = Citizen.invokeNative<boolean>('0xE9D0D38A52D47D12', );
	return netGameserverRefreshServerCatalog_result;
}