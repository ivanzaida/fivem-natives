/**
 * NETWORK:NETWORK_APPLY_TRANSITION_PARAMETER
 *
 * 0x9B74CCFFA48B4E55

 * 
 * Applies a parameter to the local transition player. This parameter will be synced to
 * other players in the transiton session
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} iD
 * @param {number} value
 */
export function networkApplyTransitionParameter(iD: number, value: number): void {
	const networkApplyTransitionParameter_result = Citizen.invokeNative<void>('0x9B74CCFFA48B4E55', iD, value);
	return networkApplyTransitionParameter_result;
}