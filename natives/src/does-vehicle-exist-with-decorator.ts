import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_EXIST_WITH_DECORATOR
 *
 * 0x824A2D0AB16C9E1A

 * 
 * Returns whether a vehicle exists with the specified decorator
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} decoratorLabel
 * @returns {VehicleIndex}  
 */
export function doesVehicleExistWithDecorator(decoratorLabel: string): VehicleIndex {
	const doesVehicleExistWithDecorator_result = Citizen.invokeNative<VehicleIndex>('0x824A2D0AB16C9E1A', decoratorLabel);
	return doesVehicleExistWithDecorator_result;
}