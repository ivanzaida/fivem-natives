/**
 * STREAMING:IS_SAFE_TO_START_PLAYER_SWITCH
 *
 * 0xB032847A7F7F0BFE

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSafeToStartPlayerSwitch(): boolean {
	const isSafeToStartPlayerSwitch_result = Citizen.invokeNative<boolean>('0xB032847A7F7F0BFE', );
	return isSafeToStartPlayerSwitch_result;
}