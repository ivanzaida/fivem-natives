/**
 * SCRIPT:_SEND_TU_SCRIPT_EVENT_NEW
 *
 * 0x71A6F836422FDD2B

 * 
 * New variant of SEND_TU_SCRIPT_EVENT that automatically initializes the event data header.
 * See TRIGGER_SCRIPT_EVENT for more info.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function sendTuScriptEventNew(): void {
	const sendTuScriptEventNew_result = Citizen.invokeNative<void>('0x71A6F836422FDD2B', );
	return sendTuScriptEventNew_result;
}