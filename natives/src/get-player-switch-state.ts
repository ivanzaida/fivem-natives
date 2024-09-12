import { ESwitchState } from '@ivanzaida/structures'

/**
 * STREAMING:GET_PLAYER_SWITCH_STATE
 *
 * 0x6D231A0D52134FC1

 * 
 * ------------------------------------------------------------------
 * @returns {ESwitchState}  
 */
export function getPlayerSwitchState(): ESwitchState {
	const getPlayerSwitchState_result = Citizen.invokeNative<ESwitchState>('0x6D231A0D52134FC1', );
	return getPlayerSwitchState_result;
}