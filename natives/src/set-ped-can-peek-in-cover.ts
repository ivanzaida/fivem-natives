import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PEEK_IN_COVER
 *
 * 0x2D3F2F7AD2E2AB65

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowPeek
 */
export function setPedCanPeekInCover(ped: PedIndex, allowPeek: boolean): void {
	const setPedCanPeekInCover_result = Citizen.invokeNative<void>('0x2D3F2F7AD2E2AB65', ped, allowPeek);
	return setPedCanPeekInCover_result;
}