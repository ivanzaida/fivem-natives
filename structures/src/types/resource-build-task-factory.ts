export type ResourceBuildTaskFactory = () => ({
    shouldBuild: (resourceName: string) => boolean;
    build: (resourceName: string, callback: (success: boolean, status: string) => void) => void;
})