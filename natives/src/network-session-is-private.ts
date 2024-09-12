/**
 * NETWORK:NETWORK_SESSION_IS_PRIVATE
 *
 * 0x6CCB49E4B35F59D6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsPrivate(): boolean {
	const networkSessionIsPrivate_result = Citizen.invokeNative<boolean>('0x6CCB49E4B35F59D6', );
	return networkSessionIsPrivate_result;
}