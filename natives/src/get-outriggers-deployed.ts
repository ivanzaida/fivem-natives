import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_OUTRIGGERS_DEPLOYED
 *
 * 0xCC986802D9AE877E

 * 
 * Checks if Chernobog's stabilizers are deployed or not.
 * These are the metal supports that allow it to fire.
 * This native only applies to the Chernobog.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getOutriggersDeployed(vehicle: VehicleIndex): boolean {
	const getOutriggersDeployed_result = Citizen.invokeNative<boolean>('0xCC986802D9AE877E', vehicle);
	return getOutriggersDeployed_result;
}