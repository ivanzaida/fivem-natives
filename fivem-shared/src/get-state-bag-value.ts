/**
 * CFX:GET_STATE_BAG_VALUE
 *
 * 0x637F4C75

 * Returns the value of a state bag key.
 * 
 * ------------------------------------------------------------------
 * @param {string} bagName
 * @param {string} key
 * @returns {any}  Value.
 */
export function getStateBagValue(bagName: string, key: string): any {
	const getStateBagValue_result = Citizen.invokeNative<any>('0x637F4C75', bagName, key);
	return getStateBagValue_result;
}