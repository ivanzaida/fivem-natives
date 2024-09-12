import { ShopBasketServerDataInfo } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_APPLY_SERVER_DATA
 *
 * 0x11FD21BA1B765FE2

 * 
 * ------------------------------------------------------------------
 * @param {number} transactionId
 * @param {ShopBasketServerDataInfo} info [Ref]
 * @returns {boolean}  
 */
export function netGameserverBasketApplyServerData(transactionId: number, info: ShopBasketServerDataInfo /* ptr */): boolean {
	const netGameserverBasketApplyServerData_result = Citizen.invokeNative<boolean>('0x11FD21BA1B765FE2', transactionId, info.dataView);
	return netGameserverBasketApplyServerData_result;
}