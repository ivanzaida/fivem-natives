import { SrcBasketItem } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_ADD_ITEM
 *
 * 0x5E8BF7E974BEA7D7

 * 
 * ------------------------------------------------------------------
 * @param {SrcBasketItem} basketItem [Ref]
 * @param {number} quantity
 * @returns {boolean}  
 */
export function netGameserverBasketAddItem(basketItem: SrcBasketItem /* ptr */, quantity: number): boolean {
	const netGameserverBasketAddItem_result = Citizen.invokeNative<boolean>('0x5E8BF7E974BEA7D7', basketItem.dataView, quantity);
	return netGameserverBasketAddItem_result;
}