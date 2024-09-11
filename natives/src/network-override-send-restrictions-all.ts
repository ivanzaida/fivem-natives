/**
 * NETWORK:NETWORK_OVERRIDE_SEND_RESTRICTIONS_ALL
 *
 * 0xF2EE6216DEB74ACC

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkOverrideSendRestrictionsAll(override: boolean): void {
	const networkOverrideSendRestrictionsAll_result = Citizen.invokeNative<void>('0xF2EE6216DEB74ACC', override);
	return networkOverrideSendRestrictionsAll_result;
}