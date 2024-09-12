/**
 * CFX:STATE_BAG_HAS_KEY
 *
 * 0X12A330

 * 
 * ------------------------------------------------------------------
 * @param {string} bagName The name of the bag.
 * @param {string} key The key used to check data existence.
 * @returns {boolean}  Returns true if the data associated with the specified key exists; otherwise, returns false.
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
	const stateBagHasKey_result = Citizen.invokeNative<boolean>('0X12A330', bagName, key);
	return stateBagHasKey_result;
}