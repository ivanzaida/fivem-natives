import { EShortSwitchState } from '@ivanzaida/structures'

/**
 * STREAMING:GET_PLAYER_SHORT_SWITCH_STATE
 *
 * 0x1F32174C38BEB883

 * 
 * ------------------------------------------------------------------
 * @returns {EShortSwitchState}  
 */
export function getPlayerShortSwitchState(): EShortSwitchState {
	const getPlayerShortSwitchState_result = Citizen.invokeNative<EShortSwitchState>('0x1F32174C38BEB883', );
	return getPlayerShortSwitchState_result;
}