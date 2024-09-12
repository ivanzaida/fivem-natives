import { ArchetypesFactory } from '@ivanzaida/structures'

/**
 * CFX:REGISTER_ARCHETYPES
 *
 * 0x3C2F9037

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * 
 * ------------------------------------------------------------------
 * @param {ArchetypesFactory} factory A function returning a list of archetypes.
 */
export function registerArchetypes(factory: ArchetypesFactory): void {
	const registerArchetypes_result = Citizen.invokeNative<void>('0x3C2F9037', factory);
	return registerArchetypes_result;
}