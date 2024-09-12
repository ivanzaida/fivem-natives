/**
 * NETSHOPPING:NET_GAMESERVER_CATALOG_IS_VALID
 *
 * 0xD79BEF4E08ED2183

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverCatalogIsValid(): boolean {
	const netGameserverCatalogIsValid_result = Citizen.invokeNative<boolean>('0xD79BEF4E08ED2183', );
	return netGameserverCatalogIsValid_result;
}