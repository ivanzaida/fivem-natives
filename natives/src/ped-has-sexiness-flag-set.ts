import { PedIndex, EPedSexinessFlag } from '@ivanzaida/structures'

/**
 * PED:PED_HAS_SEXINESS_FLAG_SET
 *
 * 0x840F81C8B23F1122

 * 
 * Checks if the specified sexiness flag is set
 * 
 * enum eSexinessFlags
 * {
 *  SF_JEER_AT_HOT_PED = 0,
 *  SF_HURRIEDFEMALES_SEXY = 1,
 *  SF_HOT_PERSON = 2,
 *  };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedSexinessFlag} flag
 * @returns {boolean}  
 */
export function pedHasSexinessFlagSet(ped: PedIndex, flag: EPedSexinessFlag | number): boolean {
	const pedHasSexinessFlagSet_result = Citizen.invokeNative<boolean>('0x840F81C8B23F1122', ped, flag);
	return pedHasSexinessFlagSet_result;
}