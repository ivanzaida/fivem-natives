/**
 * PAD:GET_LOCAL_PLAYER_GAMEPAD_AIM_STATE
 *
 * 0x8783C7E86E757352

 * 
 * Will return the gamepad setting even if the player is playing on the keyboard and mouse.
 * 
 * Returns the local player's targeting mode. See PLAYER::SET_PLAYER_TARGETING_MODE.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getLocalPlayerGamepadAimState(): number {
	const getLocalPlayerGamepadAimState_result = Citizen.invokeNative<number>('0x8783C7E86E757352', );
	return getLocalPlayerGamepadAimState_result;
}