/**
 * NETWORK:NETWORK_APPLY_TRANSITION_PARAMETER_STRING
 *
 * 0x9F634E841D2FDFE7

 * 
 * ------------------------------------------------------------------
 * @param {number} iD
 * @param {string} szParameter
 * @param {boolean} forceDirty
 */
export function networkApplyTransitionParameterString(iD: number, szParameter: string, forceDirty: boolean = false): void {
	const networkApplyTransitionParameterString_result = Citizen.invokeNative<void>('0x9F634E841D2FDFE7', iD, szParameter, forceDirty);
	return networkApplyTransitionParameterString_result;
}