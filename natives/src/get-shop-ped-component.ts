import { ShopPedComponent } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_COMPONENT
 *
 * 0xA5690D702773BED4

 * 
 * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {ShopPedComponent} componentItem [Ref]
 */
export function getShopPedComponent(nameHash: number, componentItem: ShopPedComponent /* ptr */): void {
	const getShopPedComponent_result = Citizen.invokeNative<void>('0xA5690D702773BED4', nameHash, componentItem.dataView);
	return getShopPedComponent_result;
}