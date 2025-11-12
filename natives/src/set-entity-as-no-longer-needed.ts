import { IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_AS_NO_LONGER_NEEDED
 *
 * 0x76AD45C3946F87DD

 * 
 * The entity will added back into the world population and deleted when off screen.
 * 
 * Marks the specified entity (ped, vehicle or object) as no longer needed if its population type is set to the mission type.
 * If the entity is ped, it will also clear their tasks immediately just like when CLEAR_PED_TASKS_IMMEDIATELY is called.
 * Entities marked as no longer needed, will be deleted as the engine sees fit.
 * Use this if you just want to just let the game delete the ped:
 * void MarkPedAsAmbientPed(Ped ped) {
 *   auto addr = getScriptHandleBaseAddress(ped);
 * 
 *   if (!addr) {
 *     return;
 *   }
 * 
 *   //the game uses only lower 4 bits as entity population type
 *   BYTE origValue = (BYTE )(addr + 0xDA);
 *   (BYTE )(addr + 0xDA) = ((origValue & 0xF0) | ePopulationType::POPTYPE_RANDOM_AMBIENT);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} entity [Ref]
 */
export function setEntityAsNoLongerNeeded(entity: IntRef /* ptr */): void {
	const setEntityAsNoLongerNeeded_result = Citizen.invokeNative<void>('0x76AD45C3946F87DD', entity.dataView);
	return setEntityAsNoLongerNeeded_result;
}