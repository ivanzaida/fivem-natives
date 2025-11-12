/**
 * CAM:IS_SCRIPT_GLOBAL_SHAKING
 *
 * 0x12B42434831D668E

 * 
 * In drunk_controller.c4, sub_309
 * if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {
 *     CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScriptGlobalShaking(): boolean {
	const isScriptGlobalShaking_result = Citizen.invokeNative<boolean>('0x12B42434831D668E', );
	return isScriptGlobalShaking_result;
}