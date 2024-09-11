import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_BOAT_BOOM_POSITION_RATIO
 *
 * 0x57C35460B8069979

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getBoatBoomPositionRatio(vehicle: VehicleIndex): number {
	const getBoatBoomPositionRatio_result = Citizen.invokeNative<number>('0x57C35460B8069979', vehicle);
	return getBoatBoomPositionRatio_result;
}