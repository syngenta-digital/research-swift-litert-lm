import {LiteRtLm, loadLiteRtLm, unloadLiteRtLm, type Wasm} from '@litert-lm/core';
// Placeholder for internal dependency on trusted resource url

describe('EngineSettings', () => {
  let liteRtLm: LiteRtLm;
  let modelAssets: Wasm.ModelAssets;

  beforeAll(async () => {
    unloadLiteRtLm();
    liteRtLm = await loadLiteRtLm(trustedResourceUrl`/wasm`);
    modelAssets = liteRtLm.liteRtLmWasm.ModelAssets.create('/path/to/model');
  });

  afterAll(() => {
    modelAssets.delete();
  });

  it('creates EngineSettings', () => {
    const engineSettings = liteRtLm.liteRtLmWasm.EngineSettings.createDefault(
        modelAssets, liteRtLm.liteRtLmWasm.Backend.CPU);
    expect(engineSettings).toBeDefined();
    engineSettings.delete();
  });
});
