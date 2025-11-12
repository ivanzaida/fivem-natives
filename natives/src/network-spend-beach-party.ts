/**
 * MONEY:NETWORK_SPEND_BEACH_PARTY
 *
 * 0x1F6D32912DBFCEA7

 * 
 * purchases made at the beach party bar, which are all free
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} item
 */
export function networkSpendBeachParty(item: number): void {
	const networkSpendBeachParty_result = Citizen.invokeNative<void>('0x1F6D32912DBFCEA7', item);
	return networkSpendBeachParty_result;
}