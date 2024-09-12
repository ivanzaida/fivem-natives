/**
 * CFX:GET_SCENARIO_PED_DENSITY_MULTIPLIER
 *
 * 0x77C598B2

 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#_0x7A556143A1C03898).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns scenario ped density multiplier value.
 */
export function getScenarioPedDensityMultiplier(): number {
	const getScenarioPedDensityMultiplier_result = Citizen.invokeNative<number>('0x77C598B2', );
	return getScenarioPedDensityMultiplier_result;
}