import { ShopPedComponent } from '@ivanzaida/structures'

/**
 * FILES:INIT_SHOP_PED_COMPONENT
 *
 * 0x15D20F88F06530A5

 * 
 * ------------------------------------------------------------------
 * @param {ShopPedComponent} componentItem [Ref]
 */
export function initShopPedComponent(componentItem: ShopPedComponent /* ptr */): void {
	const initShopPedComponent_result = Citizen.invokeNative<void>('0x15D20F88F06530A5', componentItem.dataView);
	return initShopPedComponent_result;
}