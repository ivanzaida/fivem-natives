/**
 * NETSHOPPING:NET_GAMESERVER_BASKET_IS_ACTIVE
 *
 * 0x79EEE2067838CC59

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverBasketIsActive(): boolean {
	const netGameserverBasketIsActive_result = Citizen.invokeNative<boolean>('0x79EEE2067838CC59', );
	return netGameserverBasketIsActive_result;
}