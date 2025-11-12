import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:GET_VEHICLE_PED_IS_USING
 *
 * 0xCDA725BC2F170795

 * 
 * Gets ID of vehicle player using. It means it can get ID at any interaction with vehicle. Enter\exit for example. And that means it is faster than GET_VEHICLE_PED_IS_IN but less safe.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {VehicleIndex}  
 */
export function getVehiclePedIsUsing(ped: PedIndex): VehicleIndex {
	const getVehiclePedIsUsing_result = Citizen.invokeNative<VehicleIndex>('0xCDA725BC2F170795', ped);
	return getVehiclePedIsUsing_result;
}