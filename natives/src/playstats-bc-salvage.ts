import { BcSalvage } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_SALVAGE
 *
 * 0x760C934FF448A9F0

 * 
 * ------------------------------------------------------------------
 * @param {BcSalvage} data [Ref]
 */
export function playstatsBcSalvage(data: BcSalvage /* ptr */): void {
	const playstatsBcSalvage_result = Citizen.invokeNative<void>('0x760C934FF448A9F0', data.dataView);
	return playstatsBcSalvage_result;
}