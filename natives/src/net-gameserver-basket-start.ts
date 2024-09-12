import { IntRef, EShopItemCategories, EItemActionTypes, ECatalogItemFlags } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_START
 *
 * 0x5156B6B1D1CD58FE

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} transactionId [Ref]
 * @param {EShopItemCategories} category
 * @param {EItemActionTypes} action
 * @param {ECatalogItemFlags} flags
 * @returns {boolean}  
 */
export function netGameserverBasketStart(transactionId: IntRef /* ptr */, category: EShopItemCategories | number, action: EItemActionTypes | number, flags: ECatalogItemFlags | number = 1): boolean {
	const netGameserverBasketStart_result = Citizen.invokeNative<boolean>('0x5156B6B1D1CD58FE', transactionId.dataView, category, action, flags);
	return netGameserverBasketStart_result;
}