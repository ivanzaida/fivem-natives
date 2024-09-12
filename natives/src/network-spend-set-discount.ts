/**
 * MONEY:NETWORK_SPEND_SET_DISCOUNT
 *
 * 0xABC3E4AF7CA40513

 * 
 * ------------------------------------------------------------------
 * @param {number} discount
 */
export function networkSpendSetDiscount(discount: number): void {
	const networkSpendSetDiscount_result = Citizen.invokeNative<void>('0xABC3E4AF7CA40513', discount);
	return networkSpendSetDiscount_result;
}