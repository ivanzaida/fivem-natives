/**
 * CAM:STOP_SCRIPT_GLOBAL_SHAKING
 *
 * 0xB9AB3B8920F1AA69

 * 
 * In drunk_controller.c4, sub_309
 * if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {
 *     CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately If TRUE, the shake will stop immediately, otherwise it will enter its release phase and fade out.
 */
export function stopScriptGlobalShaking(stopImmediately: boolean = false): void {
	const stopScriptGlobalShaking_result = Citizen.invokeNative<void>('0xB9AB3B8920F1AA69', stopImmediately);
	return stopScriptGlobalShaking_result;
}