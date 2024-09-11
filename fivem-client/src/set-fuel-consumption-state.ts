/**
 * CFX:SET_FUEL_CONSUMPTION_STATE
 *
 * 0X81DAD03E

 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.The default Gta5 behaviour is fuel consumption turned off.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state True to turn on. False to turn off.
 */
export function setFuelConsumptionState(state: boolean): void {
	const setFuelConsumptionState_result = Citizen.invokeNative<void>('0X81DAD03E', state);
	return setFuelConsumptionState_result;
}