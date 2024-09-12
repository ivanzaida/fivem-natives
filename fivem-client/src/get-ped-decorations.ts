import { PedIndex, PedDecoration } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_DECORATIONS
 *
 * 0x7CCE1163

 * Returns a list of decorations applied to a ped.The data returned adheres to the following layout:```[ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]```This command will return undefined data if invoked on a remote player ped.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped you want to retrieve data for.
 * @returns {PedDecoration}  An object containing a list of applied decorations.
 */
export function getPedDecorations(ped: PedIndex): PedDecoration[] {
	const getPedDecorations_result = Citizen.invokeNative<PedDecoration[]>('0x7CCE1163', ped, Citizen.resultAsObject());
	return getPedDecorations_result;
}