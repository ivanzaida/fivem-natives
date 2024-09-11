import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_CAN_USE_CLIMBOVERS
 *
 * 0x176A19E4589CC2C6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} useClimbovers
 */
export function setPedPathCanUseClimbovers(ped: PedIndex, useClimbovers: boolean): void {
	const setPedPathCanUseClimbovers_result = Citizen.invokeNative<void>('0x176A19E4589CC2C6', ped, useClimbovers);
	return setPedPathCanUseClimbovers_result;
}