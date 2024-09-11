/**
 * NETWORK:NETWORK_HAS_HEADSET
 *
 * 0x473AAB3F1DA97144

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasHeadset(): boolean {
	const networkHasHeadset_result = Citizen.invokeNative<boolean>('0x473AAB3F1DA97144', );
	return networkHasHeadset_result;
}