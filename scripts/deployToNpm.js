const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { log } = require('console');
const path = require('path');


const main = () => {
    writeFileSync('.npmrc', `//registry.npmjs.org/:_authToken=${process.env.NODE_AUTH_TOKEN}`);
    const pkgJson = require('../package.json');

    const version = pkgJson.version;

    const workspaces = pkgJson.workspaces;

    workspaces.forEach(element => {
        const projectPath = path.resolve(element);
        const pkgJsonPath = path.join(projectPath, `package.json`);
        const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
        pkgJson.version = version;
        writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
        const workspaceName = pkgJson.name;
     

        let versionMismatch = false;
        const packageVersion = `${workspaceName}@${version}`;

        try {
            execSync(`npm info ${packageVersion}`, { stdio: 'ignore' });
        } catch (e) {
            versionMismatch = true;
        }

        if (!versionMismatch) {
            log(`Version ${version} of ${workspaceName} already exists on npm. Skipping...`);
            return;
        } 
        
        log(`Building project ${workspaceName}...`);
        execSync(`yarn workspace ${workspaceName} build`, {});

        log(versionMismatch);
        log(`Deploying project ${packageVersion} to npm...`);
        execSync(`yarn workspace ${workspaceName} publish --access public`, { stdio: 'inherit' });
    });
}

main()