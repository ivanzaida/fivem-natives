import { ShopPedProp } from '@ivanzaida/structures'

/**
 * FILES:INIT_SHOP_PED_PROP
 *
 * 0x7A491C9A90975007

 * 
 * ------------------------------------------------------------------
 * @param {ShopPedProp} componentItem [Ref]
 */
export function initShopPedProp(componentItem: ShopPedProp /* ptr */): void {
	const initShopPedProp_result = Citizen.invokeNative<void>('0x7A491C9A90975007', componentItem.dataView);
	return initShopPedProp_result;
}