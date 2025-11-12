import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_MOVEMENT_MODE_OVERRIDE
 *
 * 0x5C61336874E84777

 * 
 * name: "MP_FEMALE_ACTION" found multiple times in the b617d scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} actionModeName
 */
export function setMovementModeOverride(ped: PedIndex, actionModeName: string = null!): void {
	const setMovementModeOverride_result = Citizen.invokeNative<void>('0x5C61336874E84777', ped, actionModeName);
	return setMovementModeOverride_result;
}