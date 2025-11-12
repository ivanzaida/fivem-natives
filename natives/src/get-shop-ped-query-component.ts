import { ShopPedComponent } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_QUERY_COMPONENT
 *
 * 0xD36906FE7BBBDB62

 * 
 * See https://git.io/JtcRf for example and structs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {ShopPedComponent} componentItem [Ref]
 */
export function getShopPedQueryComponent(index: number, componentItem: ShopPedComponent /* ptr */): void {
	const getShopPedQueryComponent_result = Citizen.invokeNative<void>('0xD36906FE7BBBDB62', index, componentItem.dataView);
	return getShopPedQueryComponent_result;
}