/**
 * NETWORK:NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS_ALL
 *
 * 0x8D163415FF0DAFC3

 * 
 * p0 is always false in scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkOverrideReceiveRestrictionsAll(override: boolean): void {
	const networkOverrideReceiveRestrictionsAll_result = Citizen.invokeNative<void>('0x8D163415FF0DAFC3', override);
	return networkOverrideReceiveRestrictionsAll_result;
}