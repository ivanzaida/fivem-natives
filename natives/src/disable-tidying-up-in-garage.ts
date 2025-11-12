/**
 * OBJECT:DISABLE_TIDYING_UP_IN_GARAGE
 *
 * 0x1DC06048E0BEE337

 * 
 * Sets a flag. A valid id is 0x157DC10D
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} disable
 */
export function disableTidyingUpInGarage(garageHash: number, disable: boolean): void {
	const disableTidyingUpInGarage_result = Citizen.invokeNative<void>('0x1DC06048E0BEE337', garageHash, disable);
	return disableTidyingUpInGarage_result;
}