import { StringRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_CATALOG_ITEM_IS_VALID
 *
 * 0xABE86AEC64720F91

 * 
 * ------------------------------------------------------------------
 * @param {StringRef} itemkey [Ref]
 * @returns {boolean}  
 */
export function netGameserverCatalogItemIsValid(itemkey: StringRef /* ptr */): boolean {
	const netGameserverCatalogItemIsValid_result = Citizen.invokeNative<boolean>('0xABE86AEC64720F91', itemkey.dataView);
	return netGameserverCatalogItemIsValid_result;
}