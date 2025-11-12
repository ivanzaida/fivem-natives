/**
 * STREAMING:IS_SWITCH_READY_FOR_DESCENT
 *
 * 0xB286852BCC387913

 * 
 * returns true if active switch is paused before descent but clear to proceed
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSwitchReadyForDescent(): boolean {
	const isSwitchReadyForDescent_result = Citizen.invokeNative<boolean>('0xB286852BCC387913', );
	return isSwitchReadyForDescent_result;
}