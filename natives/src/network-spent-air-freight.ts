/**
 * MONEY:_NETWORK_SPENT_AIR_FREIGHT
 *
 * 0x8C7E8D6F96C9E948

 * 
 * ------------------------------------------------------------------
 */
export function networkSpentAirFreight(): void {
	const networkSpentAirFreight_result = Citizen.invokeNative<void>('0x8C7E8D6F96C9E948', );
	return networkSpentAirFreight_result;
}