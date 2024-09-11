import { BcPointToPoint } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_POINT_TO_POINT
 *
 * 0x508F3011A3378766

 * 
 * ------------------------------------------------------------------
 * @param {BcPointToPoint} data [Ref]
 */
export function playstatsBcPointToPoint(data: BcPointToPoint /* ptr */): void {
	const playstatsBcPointToPoint_result = Citizen.invokeNative<void>('0x508F3011A3378766', data.dataView);
	return playstatsBcPointToPoint_result;
}