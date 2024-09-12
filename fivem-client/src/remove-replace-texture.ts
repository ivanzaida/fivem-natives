/**
 * CFX:REMOVE_REPLACE_TEXTURE
 *
 * 0xA896B20A

 * Experimental natives, please do not use in a live environment.
 * 
 * ------------------------------------------------------------------
 * @param {string} origTxd
 * @param {string} origTxn
 */
export function removeReplaceTexture(origTxd: string, origTxn: string): void {
	const removeReplaceTexture_result = Citizen.invokeNative<void>('0xA896B20A', origTxd, origTxn);
	return removeReplaceTexture_result;
}