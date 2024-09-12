/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_IS_FULL
 *
 * 0x8B61FD3426EC705D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverBasketIsFull(): boolean {
	const netGameserverBasketIsFull_result = Citizen.invokeNative<boolean>('0x8B61FD3426EC705D', );
	return netGameserverBasketIsFull_result;
}