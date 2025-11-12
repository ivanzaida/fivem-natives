import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_ALLOW_LOW_LOD_BUOYANCY
 *
 * 0x1315213A9C4437FE

 * 
 * Overrides the climbing/blocking flags of the object, used in the native scripts mostly for "prop_dock_bouy_"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {boolean} allowFlag
 */
export function setObjectAllowLowLodBuoyancy(objectID: ObjectIndex, allowFlag: boolean): void {
	const setObjectAllowLowLodBuoyancy_result = Citizen.invokeNative<void>('0x1315213A9C4437FE', objectID, allowFlag);
	return setObjectAllowLowLodBuoyancy_result;
}