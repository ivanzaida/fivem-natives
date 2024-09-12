/**
 * STREAMING:GET_PLAYER_SWITCH_JUMP_CUT_INDEX
 *
 * 0x2291B8E26538A740

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerSwitchJumpCutIndex(): number {
	const getPlayerSwitchJumpCutIndex_result = Citizen.invokeNative<number>('0x2291B8E26538A740', );
	return getPlayerSwitchJumpCutIndex_result;
}