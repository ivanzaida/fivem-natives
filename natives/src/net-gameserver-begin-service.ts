import { IntRef, EShopItemCategories, ETransactionServices, EItemActionTypes, ECatalogItemFlags } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_BEGIN_SERVICE
 *
 * 0x54BC5E0B6A29AE8A

 * 
 * see TRANSACTION_SERVICES for all service types. Returns the unique
 * transaction identifier in transactionId. Please use that id for other commands.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} transactionId [Ref]
 * @param {EShopItemCategories} category
 * @param {ETransactionServices} service
 * @param {EItemActionTypes} actionType
 * @param {number} cost
 * @param {ECatalogItemFlags} flags
 * @returns {boolean}  
 */
export function netGameserverBeginService(transactionId: IntRef /* ptr */, category: EShopItemCategories | number, service: ETransactionServices | number, actionType: EItemActionTypes | number, cost: number, flags: ECatalogItemFlags | number = 1): boolean {
	const netGameserverBeginService_result = Citizen.invokeNative<boolean>('0x54BC5E0B6A29AE8A', transactionId.dataView, category, service, actionType, cost, flags);
	return netGameserverBeginService_result;
}