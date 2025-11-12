import { ShopPedProp } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_PROP
 *
 * 0x09A485A642AEADEF

 * 
 * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {ShopPedProp} componentItem [Ref]
 */
export function getShopPedProp(nameHash: number, componentItem: ShopPedProp /* ptr */): void {
	const getShopPedProp_result = Citizen.invokeNative<void>('0x09A485A642AEADEF', nameHash, componentItem.dataView);
	return getShopPedProp_result;
}