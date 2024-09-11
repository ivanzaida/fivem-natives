/**
 * CFX:GET_STATE_BAG_KEYS
 *
 * 0X78D864C7

 * 
 * ------------------------------------------------------------------
 * @param {string} bagName The name of the bag.
 * @returns {string}  Returns an array containing all keys for which the state bag has associated values.
 */
export function getStateBagKeys(bagName: string): string[] {
	const getStateBagKeys_result = Citizen.invokeNative<string[]>('0X78D864C7', bagName, Citizen.resultAsObject());
	return getStateBagKeys_result;
}