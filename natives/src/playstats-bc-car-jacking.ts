import { BcCarJacking } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_CAR_JACKING
 *
 * 0xAC598BA78ED25971

 * 
 * ------------------------------------------------------------------
 * @param {BcCarJacking} data [Ref]
 */
export function playstatsBcCarJacking(data: BcCarJacking /* ptr */): void {
	const playstatsBcCarJacking_result = Citizen.invokeNative<void>('0xAC598BA78ED25971', data.dataView);
	return playstatsBcCarJacking_result;
}