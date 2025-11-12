/**
 * MONEY:_NETWORK_SPENT_STEALTH_MODULE
 *
 * 0x95CE79A6939C537A

 * 
 * Hash p3 = STEALTH_MODULE
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSpentStealthModule(): void {
	const networkSpentStealthModule_result = Citizen.invokeNative<void>('0x95CE79A6939C537A', );
	return networkSpentStealthModule_result;
}