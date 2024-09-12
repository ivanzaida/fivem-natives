/**
 * CFX:MUMBLE_SET_ACTIVE
 *
 * 0XD932A3F3

 * 
 * ------------------------------------------------------------------
 * @param {boolean} state Voice chat state.
 */
export function mumbleSetActive(state: boolean): void {
	const mumbleSetActive_result = Citizen.invokeNative<void>('0XD932A3F3', state);
	return mumbleSetActive_result;
}