/**
 * NETSHOPPING:NET_GAMESERVER_CATALOG_ITEM_KEY_IS_VALID
 *
 * 0x206AC354EB77B7FD

 * 
 * ------------------------------------------------------------------
 * @param {number} itemkey
 * @returns {boolean}  
 */
export function netGameserverCatalogItemKeyIsValid(itemkey: number): boolean {
	const netGameserverCatalogItemKeyIsValid_result = Citizen.invokeNative<boolean>('0x206AC354EB77B7FD', itemkey);
	return netGameserverCatalogItemKeyIsValid_result;
}