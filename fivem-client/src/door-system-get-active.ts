import { DoorSystemActiveDoor } from '@ivanzaida/structures'

/**
 * CFX:DOOR_SYSTEM_GET_ACTIVE
 *
 * 0XF65BBA4B

 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#_0x6F8838D03D1DC226)) and its object handle.The data returned adheres to the following layout:```[{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]```
 * 
 * ------------------------------------------------------------------
 * @returns {DoorSystemActiveDoor}  An object containing a list of door system entries.
 */
export function doorSystemGetActive(): DoorSystemActiveDoor[] {
	const doorSystemGetActive_result = Citizen.invokeNative<DoorSystemActiveDoor[]>('0XF65BBA4B', Citizen.resultAsObject());
	return doorSystemGetActive_result;
}