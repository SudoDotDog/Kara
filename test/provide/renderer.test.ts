/**
 * @author WMXPY
 * @namespace Provide
 * @description Renderer Provider Test
 */

import { COMMAND_DECLARE_TYPE, ICommand } from '#P/declare';
import { Provider } from '#P/renderer/renderer';
import { createCommandCommandDeclare } from '#P/util/declare';
import { expect } from 'chai';
import * as Chance from 'chance';
import { ipcRenderer } from '../mock/global/electron';

describe('Given a {Provider} class', (): void => {

    const chance: Chance.Chance = new Chance('provide-provider');

    afterEach((): void => {

        ipcRenderer.clear();
        (Provider as any)._instance = null;
    });

    const createCommand = (replace?: Partial<ICommand>): ICommand => {

        return {
            command: chance.string(),
            description: chance.string(),
            declare: {
                type: COMMAND_DECLARE_TYPE.SCRIPT,
                script: chance.string(),
                next: createCommandCommandDeclare(),
            },
            key: chance.string(),
            name: chance.string(),
            ...replace,
        };
    };

    it('should be able to contactable', (): void => {

        const clazz: Provider = Provider.instance;

        // tslint:disable-next-line
        expect(clazz).to.be.exist;
    });

    it('should be listen to ipc channel', (): void => {

        const clazz: Provider = Provider.instance;

        expect(ipcRenderer.staticCalled).to.be.deep.equal([
            ['on', 'provider-renderer-checksum', (clazz as any)._handleProviderRendererUpdate],
        ]);
    });

    it('should be able to inject command', (): void => {

        const clazz: Provider = Provider.instance;
        clazz.register(createCommand());

        expect(clazz).to.be.lengthOf(1);
    });

    it('should be able to match command', (): void => {

        const clazz: Provider = Provider.instance.clean();
        const command: ICommand = createCommand();

        clazz.register(command);

        expect(clazz).to.be.lengthOf(1);
        expect(clazz.match(command.command)).to.be.deep.equal(command);
    });

    it('should be able to find nearest command', (): void => {

        const clazz: Provider = Provider.instance.clean();

        const baseCommandKey: string = chance.string();
        const commandKey: string = baseCommandKey + chance.string();
        const furtherCommandKey: string = commandKey + chance.string();
        const baseFurtherCommandKey: string = furtherCommandKey + chance.string();

        const command: ICommand = createCommand({ command: commandKey });
        const furtherCommand: ICommand = createCommand({ command: furtherCommandKey });

        clazz.register(command).register(furtherCommand);

        expect(clazz).to.be.lengthOf(2);
        expect(clazz.nearest(baseCommandKey)).to.be.deep.equal(command);
        expect(clazz.nearest(baseFurtherCommandKey)).to.be.deep.equal(furtherCommand);
    });
});
