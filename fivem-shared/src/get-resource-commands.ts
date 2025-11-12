import { ResourceCommand } from '@ivanzaida/structures'

/**
 * CFX:GET_RESOURCE_COMMANDS
 *
 * 0x97628584

 * Returns all commands registered by the specified resource.The data returned adheres to the following layout:```[{"name": "cmdlist","resource": "example_resource","arity" = -1,},{"name": "command1""resource": "example_resource2","arity" = -1,}]```
 * 
 * ------------------------------------------------------------------
 * @param {string} resource
 * @returns {ResourceCommand}  An object containing registered commands.
 */
export function getResourceCommands(resource: string): ResourceCommand[] {
	const getResourceCommands_result = Citizen.invokeNative<ResourceCommand[]>('0x97628584', resource, Citizen.resultAsObject());
	return getResourceCommands_result;
}