/**
 * CFX:ADD_REPLACE_TEXTURE
 *
 * 0xA66F8F75

 * Experimental natives, please do not use in a live environment.
 * 
 * ------------------------------------------------------------------
 * @param {string} origTxd
 * @param {string} origTxn
 * @param {string} newTxd
 * @param {string} newTxn
 */
export function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void {
	const addReplaceTexture_result = Citizen.invokeNative<void>('0xA66F8F75', origTxd, origTxn, newTxd, newTxn);
	return addReplaceTexture_result;
}