import { EMobilePhoneType } from '@ivanzaida/structures'

/**
 * MOBILE:CREATE_MOBILE_PHONE
 *
 * 0x531FF8BCC6FFD9E3

 * 
 * Creates a mobile phone of the specified type.
 * 
 * Possible phone types:
 * 
 * 0 - Default phone / Michael's phone
 * 1 - Trevor's phone
 * 2 - Franklin's phone
 * 3 - Unused police phone
 * 4 - Prologue phone
 * 
 * Higher values may crash your game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EMobilePhoneType} mobilePhoneType
 */
export function createMobilePhone(mobilePhoneType: EMobilePhoneType | number): void {
	const createMobilePhone_result = Citizen.invokeNative<void>('0x531FF8BCC6FFD9E3', mobilePhoneType);
	return createMobilePhone_result;
}