import { BcProtectionRacket } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_PROTECTION_RACKET
 *
 * 0xA2FA391998A5CA4F

 * 
 * ------------------------------------------------------------------
 * @param {BcProtectionRacket} data [Ref]
 */
export function playstatsBcProtectionRacket(data: BcProtectionRacket /* ptr */): void {
	const playstatsBcProtectionRacket_result = Citizen.invokeNative<void>('0xA2FA391998A5CA4F', data.dataView);
	return playstatsBcProtectionRacket_result;
}