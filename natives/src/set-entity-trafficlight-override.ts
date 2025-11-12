import { EntityIndex, ETrafficlightOverrideMode } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_TRAFFICLIGHT_OVERRIDE
 *
 * 0x20FF02ED0F707CBC

 * 
 * Override the state of a traffic light to red, amber, green. or none.
 * 
 * Example here: www.gtaforums.com/topic/830463-help-with-turning-lights-green-and-causing-peds-to-crash-into-each-other/#entry1068211340
 * 
 * 0 = green
 * 1 = red
 * 2 = yellow
 * 3 = reset changes
 * changing lights may not change the behavior of vehicles
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {ETrafficlightOverrideMode} overrideMode
 */
export function setEntityTrafficlightOverride(entity: EntityIndex, overrideMode: ETrafficlightOverrideMode | number): void {
	const setEntityTrafficlightOverride_result = Citizen.invokeNative<void>('0x20FF02ED0F707CBC', entity, overrideMode);
	return setEntityTrafficlightOverride_result;
}