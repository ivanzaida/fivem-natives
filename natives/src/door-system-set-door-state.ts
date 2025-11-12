import { EDoorState } from '@ivanzaida/structures'

/**
 * OBJECT:DOOR_SYSTEM_SET_DOOR_STATE
 *
 * 0xEBB2809684978887

 * 
 * Lockstates not applied and CNetObjDoor's not created until DOOR_SYSTEM_GET_IS_PHYSICS_LOADED returns true.
 * `requestDoor` on true, and when door system is configured to, i.e., "persists w/o netobj", generate a CRequestDoorEvent.
 * `forceUpdate` on true, forces an update on the door system (same path as netObjDoor_applyDoorStuff)
 * Door lock states:
 * 0: UNLOCKED
 * 1: LOCKED
 * 2: DOORSTATE_FORCE_LOCKED_UNTIL_OUT_OF_AREA
 * 3: DOORSTATE_FORCE_UNLOCKED_THIS_FRAME
 * 4: DOORSTATE_FORCE_LOCKED_THIS_FRAME
 * 5: DOORSTATE_FORCE_OPEN_THIS_FRAME
 * 6: DOORSTATE_FORCE_CLOSED_THIS_FRAME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {EDoorState} state
 * @param {boolean} network
 * @param {boolean} flushState
 */
export function doorSystemSetDoorState(doorEnumHash: number, state: EDoorState | number, network: boolean = true, flushState: boolean = false): void {
	const doorSystemSetDoorState_result = Citizen.invokeNative<void>('0xEBB2809684978887', doorEnumHash, state, network, flushState);
	return doorSystemSetDoorState_result;
}