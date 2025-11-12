import { PedIndex, EPedResetFlags } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RESET_FLAG
 *
 * 0x0FB8E752BCC547A9

 * 
 * PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
 * Known values:
 * PRF_PreventGoingIntoStillInVehicleState = 236 (fanatic2.c)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedResetFlags} resetFlag
 * @param {boolean} flag
 */
export function setPedResetFlag(ped: PedIndex, resetFlag: EPedResetFlags | number, flag: boolean): void {
	const setPedResetFlag_result = Citizen.invokeNative<void>('0x0FB8E752BCC547A9', ped, resetFlag, flag);
	return setPedResetFlag_result;
}