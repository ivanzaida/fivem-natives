/**
 * MONEY:_NETWORK_EARN_TAXI_JOB
 *
 * 0x04AA32C25ED6D69D

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnTaxiJob(p0: unknown, p1: unknown): void {
	const networkEarnTaxiJob_result = Citizen.invokeNative<void>('0x04AA32C25ED6D69D', p0, p1);
	return networkEarnTaxiJob_result;
}