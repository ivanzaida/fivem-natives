/**
 * NETWORK:SET_LAST_VIEWED_SHOP_ITEM
 *
 * 0x2ECA4EE3F57B8468

 * 
 * Sets the id of the last visited store. Used to track the purchase flow
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} itemHash
 * @param {number} itemPrice
 * @param {number} shopNameHash
 */
export function setLastViewedShopItem(itemHash: number, itemPrice: number, shopNameHash: number): void {
	const setLastViewedShopItem_result = Citizen.invokeNative<void>('0x2ECA4EE3F57B8468', itemHash, itemPrice, shopNameHash);
	return setLastViewedShopItem_result;
}