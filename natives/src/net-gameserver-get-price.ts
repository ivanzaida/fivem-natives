import { EShopItemCategories } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_GET_PRICE
 *
 * 0xD2ACF01ED6E6D7C6

 * 
 * Retrieve an item price. Item can be from the inventory
 * or a service.
 * 
 * bool is always true in game scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} itemId
 * @param {EShopItemCategories} category
 * @param {number} quantity
 * @returns {number}  
 */
export function netGameserverGetPrice(itemId: number, category: EShopItemCategories | number, quantity: number): number {
	const netGameserverGetPrice_result = Citizen.invokeNative<number>('0xD2ACF01ED6E6D7C6', itemId, category, quantity);
	return netGameserverGetPrice_result;
}