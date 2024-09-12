import { ResourceBuildTaskFactory } from '@ivanzaida/structures'

/**
 * CFX:REGISTER_RESOURCE_BUILD_TASK_FACTORY
 *
 * 0X285B43CA

 * Registers a build task factory for resources.The function should return an object (msgpack map) with the following fields:```{// returns whether the specific resource should be builtshouldBuild = func(resourceName: string): bool,// asynchronously start building the specific resource.// call cb when completedbuild = func(resourceName: string, cb: func(success: bool, status: string): void): void}```
 * 
 * ------------------------------------------------------------------
 * @param {string} factoryId The identifier for the build task.
 * @param {ResourceBuildTaskFactory} factoryFn The factory function.
 */
export function registerResourceBuildTaskFactory(factoryId: string, factoryFn: ResourceBuildTaskFactory): void {
	const registerResourceBuildTaskFactory_result = Citizen.invokeNative<void>('0X285B43CA', factoryId, factoryFn);
	return registerResourceBuildTaskFactory_result;
}