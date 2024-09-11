/**
 * CFX:REMOVE_STATE_BAG_CHANGE_HANDLER
 *
 * 0XD36BE661

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Removes a handler for changes to a state bag.
 * 
 * ------------------------------------------------------------------
 * @param {number} cookie The cookie.
 */
export function removeStateBagChangeHandler(cookie: number): void {
	const removeStateBagChangeHandler_result = Citizen.invokeNative<void>('0XD36BE661', cookie);
	return removeStateBagChangeHandler_result;
}