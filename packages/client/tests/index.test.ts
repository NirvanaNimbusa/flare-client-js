import { flare } from '../src/index';

beforeAll(() => {});

it('properly lights', done => {
    const projectKey = 'aprojectkey';

    flare.light(projectKey);

    expect(flare.config.key).toBe(projectKey);

    done();
});

it('can create glows', done => {
    flare.glow('glowName', undefined, undefined);

    expect(flare.glows.length).toBe(1);

    expect(flare.glows[0]).toMatchObject({
        name: 'glowName',
        message_level: 'info',
        meta_data: [],
    });

    expect(typeof flare.glows[0].microtime).toBe('number');
    expect(typeof flare.glows[0].time).toBe('number');

    done();
});

it.todo('can register solution providers');

it.todo('can use (async) solution providers properly');

it.todo('can build an error report from an error');

it.todo('can create custom context and context groups');

it.todo('can throttle when too many reports are being sent');
