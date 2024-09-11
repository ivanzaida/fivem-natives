/**
 * HUD:CODE_WANTS_SCRIPT_TO_TAKE_CONTROL
 *
 * 0xB91865281BB9451B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function codeWantsScriptToTakeControl(): boolean {
	const codeWantsScriptToTakeControl_result = Citizen.invokeNative<boolean>('0xB91865281BB9451B', );
	return codeWantsScriptToTakeControl_result;
}