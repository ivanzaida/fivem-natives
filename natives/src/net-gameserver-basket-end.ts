/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_END
 *
 * 0xD8EB47E09DFC393C

 * 
 * End Basket and let code know script doesnt need it anymore. This should only be
 * when we are done with shooping and after the transaction has ended. We need to deal with error cases.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverBasketEnd(): boolean {
	const netGameserverBasketEnd_result = Citizen.invokeNative<boolean>('0xD8EB47E09DFC393C', );
	return netGameserverBasketEnd_result;
}