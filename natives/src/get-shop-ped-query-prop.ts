import { ShopPedProp } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_QUERY_PROP
 *
 * 0x2DBB2D25D50A5392

 * 
 * See https://git.io/JtcRf for example and structs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {ShopPedProp} componentItem [Ref]
 */
export function getShopPedQueryProp(index: number, componentItem: ShopPedProp /* ptr */): void {
	const getShopPedQueryProp_result = Citizen.invokeNative<void>('0x2DBB2D25D50A5392', index, componentItem.dataView);
	return getShopPedQueryProp_result;
}