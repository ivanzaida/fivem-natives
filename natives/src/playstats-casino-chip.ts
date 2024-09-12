import { Casinochipmetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_CHIP
 *
 * 0x3537BA3FCD2A039A

 * 
 * ------------------------------------------------------------------
 * @param {Casinochipmetric} data [Ref]
 */
export function playstatsCasinoChip(data: Casinochipmetric /* ptr */): void {
	const playstatsCasinoChip_result = Citizen.invokeNative<void>('0x3537BA3FCD2A039A', data.dataView);
	return playstatsCasinoChip_result;
}