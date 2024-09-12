/**
 * PED:SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME
 *
 * 0x0397A00D015A11D4

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorMult
 * @param {number} exteriorMult
 */
export function setScenarioPedDensityMultiplierThisFrame(interiorMult: number, exteriorMult: number): void {
	const setScenarioPedDensityMultiplierThisFrame_result = Citizen.invokeNative<void>('0x0397A00D015A11D4', interiorMult, exteriorMult);
	return setScenarioPedDensityMultiplierThisFrame_result;
}