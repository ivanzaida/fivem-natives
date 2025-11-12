/**
 * CFX:GET_ALL_VEHICLE_MODELS
 *
 * 0xD7531645

 * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.Example output```["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]```This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getAllVehicleModels(): string[] {
	const getAllVehicleModels_result = Citizen.invokeNative<string[]>('0xD7531645', Citizen.resultAsObject());
	return getAllVehicleModels_result;
}