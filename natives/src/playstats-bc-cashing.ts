import { BcCashing } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_CASHING
 *
 * 0x350AD43F9C3F2454

 * 
 * ------------------------------------------------------------------
 * @param {BcCashing} data [Ref]
 */
export function playstatsBcCashing(data: BcCashing /* ptr */): void {
	const playstatsBcCashing_result = Citizen.invokeNative<void>('0x350AD43F9C3F2454', data.dataView);
	return playstatsBcCashing_result;
}