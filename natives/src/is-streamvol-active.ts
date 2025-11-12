/**
 * STREAMING:IS_STREAMVOL_ACTIVE
 *
 * 0x8240737C161141A9

 * 
 * Returns true if there is some currently active streaming volume
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStreamvolActive(): boolean {
	const isStreamvolActive_result = Citizen.invokeNative<boolean>('0x8240737C161141A9', );
	return isStreamvolActive_result;
}