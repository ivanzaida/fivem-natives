/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_PHONE_NUMBER
 *
 * 0x6CA7A80BDD78C062

 * 
 * p1 was always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} phoneNumberString
 * @param {number} numberOfCharactersToDisplay
 */
export function addTextComponentSubstringPhoneNumber(phoneNumberString: string, numberOfCharactersToDisplay: number = 1): void {
	const addTextComponentSubstringPhoneNumber_result = Citizen.invokeNative<void>('0x6CA7A80BDD78C062', phoneNumberString, numberOfCharactersToDisplay);
	return addTextComponentSubstringPhoneNumber_result;
}