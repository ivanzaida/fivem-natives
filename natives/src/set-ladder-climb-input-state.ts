import { PedIndex, ELadderInputState } from '@ivanzaida/structures'

/**
 * PED:SET_LADDER_CLIMB_INPUT_STATE
 *
 * 0x52E59AF01BE23E89

 * 
 * Only appears in lamar1 script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ELadderInputState} inputState
 */
export function setLadderClimbInputState(ped: PedIndex, inputState: ELadderInputState | number): void {
	const setLadderClimbInputState_result = Citizen.invokeNative<void>('0x52E59AF01BE23E89', ped, inputState);
	return setLadderClimbInputState_result;
}