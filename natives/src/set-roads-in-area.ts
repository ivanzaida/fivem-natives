/**
 * PATHFIND:SET_ROADS_IN_AREA
 *
 * 0xD1B0AF388B711EBC

 * 
 * This means that cars will drive on to these roads and new cars will be generated on them.
 * When a road is switched off, no cars should be created on it and cars that already exist will try to avoid driving on to it.
 * To undo a SWITCH_ROADS_ON or a SWITCH_ROADS_OFF, use SWITCH_ROADS_BACK_TO_ORIGINAL.
 * 
 * When nodeEnabled is set to false, all nodes in the area get disabled.
 * `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns true afterwards.
 * If it's true, `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns false.
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
 * @param {boolean} network
 */
export function setRoadsInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, active: boolean, network: boolean = true): void {
	const setRoadsInArea_result = Citizen.invokeNative<void>('0xD1B0AF388B711EBC', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, active, network);
	return setRoadsInArea_result;
}