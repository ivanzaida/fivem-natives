/**
 * VEHICLE:_SET_DEPLOY_MISSILE_BAYS
 *
 * 0x0C02468829E4AA65

 * 
 * ------------------------------------------------------------------
 */
export function setDeployMissileBays(): void {
	const setDeployMissileBays_result = Citizen.invokeNative<void>('0x0C02468829E4AA65', );
	return setDeployMissileBays_result;
}