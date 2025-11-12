import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_FOLDING_WINGS_DEPLOYED
 *
 * 0xA347DA69520FE64A

 * 
 * Only used with the "akula" and "annihilator2" in the decompiled native scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function areFoldingWingsDeployed(vehicle: VehicleIndex): boolean {
	const areFoldingWingsDeployed_result = Citizen.invokeNative<boolean>('0xA347DA69520FE64A', vehicle);
	return areFoldingWingsDeployed_result;
}