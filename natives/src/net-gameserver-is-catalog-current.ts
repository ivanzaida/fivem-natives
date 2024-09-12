/**
 * NETSHOPPING:NET_GAMESERVER_IS_CATALOG_CURRENT
 *
 * 0xB879CA89F967F26F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverIsCatalogCurrent(): boolean {
	const netGameserverIsCatalogCurrent_result = Citizen.invokeNative<boolean>('0xB879CA89F967F26F', );
	return netGameserverIsCatalogCurrent_result;
}