/**
 * CFX:WAS_EVENT_CANCELED
 *
 * 0X58382A19

 * Returns whether or not the currently executing event was canceled.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  A boolean.
 */
export function wasEventCanceled(): boolean {
	const wasEventCanceled_result = Citizen.invokeNative<boolean>('0X58382A19', );
	return wasEventCanceled_result;
}