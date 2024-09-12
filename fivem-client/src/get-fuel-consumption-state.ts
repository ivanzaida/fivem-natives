/**
 * CFX:GET_FUEL_CONSUMPTION_STATE
 *
 * 0xC66CD90C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True if fuel consumption is turned on. False otherwise.
 */
export function getFuelConsumptionState(): boolean {
	const getFuelConsumptionState_result = Citizen.invokeNative<boolean>('0xC66CD90C', );
	return getFuelConsumptionState_result;
}