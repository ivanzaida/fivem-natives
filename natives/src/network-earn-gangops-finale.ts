/**
 * MONEY:NETWORK_EARN_GANGOPS_FINALE
 *
 * 0x177CA8EC3BEBA1EB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} contentid
 */
export function networkEarnGangopsFinale(amount: number, contentid: string): void {
	const networkEarnGangopsFinale_result = Citizen.invokeNative<void>('0x177CA8EC3BEBA1EB', amount, contentid);
	return networkEarnGangopsFinale_result;
}