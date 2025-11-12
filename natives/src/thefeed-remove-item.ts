/**
 * HUD:THEFEED_REMOVE_ITEM
 *
 * 0xFE3A52C5B7AE3101

 * 
 * Removes a notification instantly instead of waiting for it to disappear
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} id
 */
export function thefeedRemoveItem(id: number): void {
	const thefeedRemoveItem_result = Citizen.invokeNative<void>('0xFE3A52C5B7AE3101', id);
	return thefeedRemoveItem_result;
}