/**
 * MONEY:_NETWORK_EARN_AVENGER
 *
 * 0x55F006B9D4A46C1D

 * 
 * Used for SERVICE_EARN_AVENGER_OPERATIONS & SERVICE_EARN_AVENGER_OPS_BONUS
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkEarnAvenger(): void {
	const networkEarnAvenger_result = Citizen.invokeNative<void>('0x55F006B9D4A46C1D', );
	return networkEarnAvenger_result;
}