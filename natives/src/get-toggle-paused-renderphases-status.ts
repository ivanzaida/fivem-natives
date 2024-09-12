/**
 * GRAPHICS:GET_TOGGLE_PAUSED_RENDERPHASES_STATUS
 *
 * 0x26A0105F181C2828

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getTogglePausedRenderphasesStatus(): boolean {
	const getTogglePausedRenderphasesStatus_result = Citizen.invokeNative<boolean>('0x26A0105F181C2828', );
	return getTogglePausedRenderphasesStatus_result;
}