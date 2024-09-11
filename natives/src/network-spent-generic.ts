/**
 * MONEY:_NETWORK_SPENT_GENERIC
 *
 * 0x2803B027479FB640

 * 
 * ------------------------------------------------------------------
 */
export function networkSpentGeneric(): void {
	const networkSpentGeneric_result = Citizen.invokeNative<void>('0x2803B027479FB640', );
	return networkSpentGeneric_result;
}