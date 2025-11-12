import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DEPLOY_FOLDING_WINGS
 *
 * 0x89D51606F3FCA194

 * 
 * Only used with the "akula" and "annihilator2" in the decompiled native scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} deploy
 * @param {boolean} instant
 */
export function setDeployFoldingWings(vehicle: VehicleIndex, deploy: boolean, instant: boolean): void {
	const setDeployFoldingWings_result = Citizen.invokeNative<void>('0x89D51606F3FCA194', vehicle, deploy, instant);
	return setDeployFoldingWings_result;
}