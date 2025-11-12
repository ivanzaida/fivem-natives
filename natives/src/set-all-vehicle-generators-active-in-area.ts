/**
 * VEHICLE:SET_ALL_VEHICLE_GENERATORS_ACTIVE_IN_AREA
 *
 * 0xA63572E348CC4CFB

 * 
 * Max allowed areas is 48. Let code know if that needs increasing
 * 
 * When p6 is true, vehicle generators are active.
 * p7 seems to always be true in story mode scripts, but it's sometimes false in online scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} active
 * @param {boolean} syncOverNetwork
 */
export function setAllVehicleGeneratorsActiveInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, active: boolean, syncOverNetwork: boolean = true): void {
	const setAllVehicleGeneratorsActiveInArea_result = Citizen.invokeNative<void>('0xA63572E348CC4CFB', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, active, syncOverNetwork);
	return setAllVehicleGeneratorsActiveInArea_result;
}