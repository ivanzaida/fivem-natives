import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_CAN_USE_LADDERS
 *
 * 0xDAB3EED1D80C2712

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} useLadders
 */
export function setPedPathCanUseLadders(ped: PedIndex, useLadders: boolean): void {
	const setPedPathCanUseLadders_result = Citizen.invokeNative<void>('0xDAB3EED1D80C2712', ped, useLadders);
	return setPedPathCanUseLadders_result;
}