/**
 * NETWORK:NETWORK_SESSION_MARK_VISIBLE
 *
 * 0x4C4BDAB6F7441447

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isVisible
 */
export function networkSessionMarkVisible(isVisible: boolean): void {
	const networkSessionMarkVisible_result = Citizen.invokeNative<void>('0x4C4BDAB6F7441447', isVisible);
	return networkSessionMarkVisible_result;
}