/**
 * NETWORK:NETWORK_SUPPRESS_INVITE
 *
 * 0x408B17CF0BA8B155

 * 
 * ------------------------------------------------------------------
 * @param {boolean} suppress
 */
export function networkSuppressInvite(suppress: boolean): void {
	const networkSuppressInvite_result = Citizen.invokeNative<void>('0x408B17CF0BA8B155', suppress);
	return networkSuppressInvite_result;
}