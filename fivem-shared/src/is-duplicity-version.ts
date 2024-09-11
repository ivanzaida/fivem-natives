/**
 * CFX:IS_DUPLICITY_VERSION
 *
 * 0XCF24C52E

 * Gets whether or not this is the CitizenFX server.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  A boolean value.
 */
export function isDuplicityVersion(): boolean {
	const isDuplicityVersion_result = Citizen.invokeNative<boolean>('0XCF24C52E', );
	return isDuplicityVersion_result;
}