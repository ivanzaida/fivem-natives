/**
 * CFX:SET_STATE_BAG_VALUE
 *
 * 0X8D50E33A

 * Internal function for setting a state bag value.
 * 
 * ------------------------------------------------------------------
 * @param {string} bagName
 * @param {string} keyName
 * @param {string} valueData
 * @param {number} valueLength
 * @param {boolean} replicated
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
	const setStateBagValue_result = Citizen.invokeNative<void>('0X8D50E33A', bagName, keyName, valueData, valueLength, replicated);
	return setStateBagValue_result;
}