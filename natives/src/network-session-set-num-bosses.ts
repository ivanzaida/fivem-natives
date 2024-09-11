/**
 * NETWORK:NETWORK_SESSION_SET_NUM_BOSSES
 *
 * 0x76B38120ECD9A6EE

 * 
 * ------------------------------------------------------------------
 * @param {number} numBosses
 */
export function networkSessionSetNumBosses(numBosses: number): void {
	const networkSessionSetNumBosses_result = Citizen.invokeNative<void>('0x76B38120ECD9A6EE', numBosses);
	return networkSessionSetNumBosses_result;
}