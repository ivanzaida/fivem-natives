/**
 * PLAYER:GET_PLAYER_TARGETING_MODE
 *
 * 0x875BDD898B99C8CE

 * 
 * Returns targeting mode. See SET_PLAYER_TARGETING_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerTargetingMode(): number {
	const getPlayerTargetingMode_result = Citizen.invokeNative<number>('0x875BDD898B99C8CE', );
	return getPlayerTargetingMode_result;
}