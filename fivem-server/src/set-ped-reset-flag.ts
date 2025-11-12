import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_RESET_FLAG
 *
 * 0xCFF6FF66

 * 
 * PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
 * Known values:
 * PRF_PreventGoingIntoStillInVehicleState = 236 (fanatic2.c)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} flagId
 * @param {boolean} doReset
 */
export function setPedResetFlag(ped: PedIndex, flagId: number, doReset: boolean): void {
	const setPedResetFlag_result = Citizen.invokeNative<void>('0xCFF6FF66', ped, flagId, doReset);
	return setPedResetFlag_result;
}