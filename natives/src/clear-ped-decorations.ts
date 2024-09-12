import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_DECORATIONS
 *
 * 0xA781062E77B54775

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedDecorations(ped: PedIndex): void {
	const clearPedDecorations_result = Citizen.invokeNative<void>('0xA781062E77B54775', ped);
	return clearPedDecorations_result;
}