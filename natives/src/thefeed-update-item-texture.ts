/**
 * HUD:THEFEED_UPDATE_ITEM_TEXTURE
 *
 * 0x4CF6314488B07405

 * 
 * Used in the native scripts to reference "GET_PEDHEADSHOT_TXD_STRING" and "CHAR_DEFAULT".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} oldTXD
 * @param {string} oldTXN
 * @param {string} newTXD
 * @param {string} newTXN
 */
export function thefeedUpdateItemTexture(oldTXD: string, oldTXN: string, newTXD: string, newTXN: string): void {
	const thefeedUpdateItemTexture_result = Citizen.invokeNative<void>('0x4CF6314488B07405', oldTXD, oldTXN, newTXD, newTXN);
	return thefeedUpdateItemTexture_result;
}