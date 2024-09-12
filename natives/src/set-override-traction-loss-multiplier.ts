/**
 * VEHICLE:_SET_OVERRIDE_TRACTION_LOSS_MULTIPLIER
 *
 * 0xAFD262ACCA64479A

 * 
 * ------------------------------------------------------------------
 */
export function setOverrideTractionLossMultiplier(): void {
	const setOverrideTractionLossMultiplier_result = Citizen.invokeNative<void>('0xAFD262ACCA64479A', );
	return setOverrideTractionLossMultiplier_result;
}